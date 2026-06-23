const HARDWARE_STORAGE_KEY = 'formally_device_uuid';

/**
 * Universal UUID generator compatible with non-HTTPS mobile browsers.
 */
const generateUUID = (): string => {
    // 1. If available in secure context, use native randomUUID
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }

    // 2. Fallback using crypto.getRandomValues if supported
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        bytes[6] = (bytes[6] & 0x0f) | 0x40; // RFC4122 variant
        bytes[8] = (bytes[8] & 0x3f) | 0x80; // Version 4
        return [...bytes]
            .map((b, i) =>
                ([4, 6, 8, 10].includes(i) ? '-' : '') + b.toString(16).padStart(2, '0')
            )
            .join('');
    }

    // 3. Fallback for insecure LAN mobile HTTP environments
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

/**
 * Retrieves or generates an immutable client hardware identifier
 * to prevent proxy submissions from the same physical phone.
 */
export const getOrCreateHardwareUUID = (): string => {
    let uuid = localStorage.getItem(HARDWARE_STORAGE_KEY);
    if (!uuid) {
        uuid = `dev_${generateUUID()}`;
        localStorage.setItem(HARDWARE_STORAGE_KEY, uuid);
    }
    return uuid;
};