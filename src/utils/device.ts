const STORAGE_KEY = 'formally_device_uuid';

/**
 * Builds a deterministic, persistent hardware fingerprint.
 * Inspects device-level hardware constraints that remain identical
 * even when iOS wipes the ephemeral Safari scanner sandbox.
 */
function getDeterministicHardwareHash(): string {
    const nav = window.navigator;
    const screen = window.screen;

    // Collect fixed hardware properties
    const hardwareSpecs = [
        screen.width,
        screen.height,
        screen.colorDepth,
        screen.pixelDepth || 24,
        window.devicePixelRatio || 1,
        nav.hardwareConcurrency || 4,
        nav.maxTouchPoints || 0,
        new Date().getTimezoneOffset(),
        nav.platform || 'unknown',
    ];

    // Try to inspect Canvas rendering engine footprint
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                hardwareSpecs.push((gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL));
            }
        }
    } catch {
        // If WebGL is unavailable, fallback to specs
    }

    // 32-bit FNV-1a Hash
    let hash = 0x811c9dc5;
    const str = hardwareSpecs.join('###');
    for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = Math.imul(hash, 0x01000193);
    }

    return (hash >>> 0).toString(16).padStart(8, '0');
}

/**
 * Returns a stable device UUID.
 * Even if cookies and localStorage are completely purged on iOS scanner sheets,
 * the hardware hash consistently produces the exact same identifier for that phone.
 */
export const getOrCreateHardwareUUID = (): string => {
    const hardwareHash = getDeterministicHardwareHash();
    const stableId = `dev_${hardwareHash}`;

    try {
        localStorage.setItem(STORAGE_KEY, stableId);
    } catch {}

    try {
        document.cookie = `${STORAGE_KEY}=${stableId}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}

    return stableId;
};

