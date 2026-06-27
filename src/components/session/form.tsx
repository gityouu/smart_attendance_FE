import React, { useEffect, useState } from 'react';
import { toast } from "sonner";
import { getBrowserCoordinates } from "../../utils/geo";
import { getOrCreateHardwareUUID } from "../../utils/device";
import { createSessionApi } from "../../api/sessionApi";
import { ExtendedFormProps } from "../../types/attendance";
import { formatUserErrorMessage } from "../../context/createSessionErrorContext";

const COOLDOWN_KEY = 'formally_host_cooldown_until';

export default function Form({ onSessionCreated, onSessionReset }: ExtendedFormProps) {
    const [courseName, setCourseName] = useState('');
    const [email, setEmail] = useState('');
    const [durationMinutes, setDurationMinutes] = useState<number>(5);
    const [gpsEnabled, setGpsEnabled] = useState(false);
    const [strictDeviceId, setStrictDeviceId] = useState(true);
    const [loading, setLoading] = useState(false);
    const [cooldownSeconds, setCooldownSeconds] = useState<number>(0);

    // 1. Check existing cooldown on component mount from localStorage
    useEffect(() => {
        const storedUntil = localStorage.getItem(COOLDOWN_KEY);
        if (storedUntil) {
            const remaining = Math.ceil((Number(storedUntil) - Date.now()) / 1000);
            if (remaining > 0) {
                setCooldownSeconds(remaining);
            } else {
                localStorage.removeItem(COOLDOWN_KEY);
            }
        }
    }, []);

    // 2. Active countdown ticker
    useEffect(() => {
        if (cooldownSeconds <= 0) return;

        const interval = setInterval(() => {
            setCooldownSeconds((prev) => {
                if (prev <= 1) {
                    localStorage.removeItem(COOLDOWN_KEY);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [cooldownSeconds]);

    const startCooldown = (seconds: number) => {
        setCooldownSeconds(seconds);
        localStorage.setItem(COOLDOWN_KEY, String(Date.now() + seconds * 1000));
    };

    const formatTimer = (totalSecs: number): string => {
        const m = Math.floor(totalSecs / 60);
        const s = totalSecs % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cooldownSeconds > 0) return;

        setLoading(true);

        try {
            let centerLat: number | null = null;
            let centerLong: number | null = null;

            if (gpsEnabled) {
                const coords = await getBrowserCoordinates();
                centerLat = coords.lat;
                centerLong = coords.long;
            }

            const hostUuid = getOrCreateHardwareUUID();

            const session = await createSessionApi({
                name: courseName,
                ad_hoc_email: email,
                duration_minutes: durationMinutes,
                tier: 'free',
                host_hardware_uuid: hostUuid,
                gps_enabled: gpsEnabled,
                center_lat: centerLat,
                center_long: centerLong,
                allowed_radius_meters: 50,
                strict_device_id: strictDeviceId,
            });

            toast.success('Session created successfully!', {
                description: 'Your rotating dynamic QR code is now live.',
            });

            if (onSessionCreated) {
                onSessionCreated(session);
            }
        } catch (err: unknown) {
            const apiError = err as Error & { remaining_seconds?: number; code?: string; status?: number };

            // Revert QR code output to blank placeholder
            if (onSessionReset) {
                onSessionReset();
            }

            const errorMsg = apiError.message?.toLowerCase() || '';
            const isCooldownError =
                apiError.status === 429 ||
                apiError.code === 'HOST_COOLDOWN_ACTIVE' ||
                errorMsg.includes('cooldown') ||
                errorMsg.includes('free tier limit');

            if (apiError.remaining_seconds && apiError.remaining_seconds > 0) {
                startCooldown(apiError.remaining_seconds);
            } else if (isCooldownError) {
                // Parse minutes if present in error string (e.g. "wait 58 minute(s)")
                const match = errorMsg.match(/(\d+)\s*minute/);
                const fallbackSecs = match ? Number(match[1]) * 60 : 3600;
                startCooldown(fallbackSecs);
            }

            toast.error('Could not start session', {
                description: formatUserErrorMessage(err),
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex-1 p-4 lg:p-6 bg-surface-container-lowest dark:bg-neutral-900">
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-on-surface dark:text-white tracking-tight mb-2">
                    New Session
                </h1>
                <p className="text-on-surface-variant dark:text-neutral-400 text-sm font-medium">
                    No account needed. Fill in the details and start tracking.
                </p>
            </header>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Course Name */}
                <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                        Course Name / Code / Meeting Title
                    </label>
                    <input
                        className="w-full px-4 py-3 bg-surface-container-low dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 rounded-lg text-on-surface dark:text-white placeholder:text-outline dark:placeholder:text-neutral-500 transition-all form-input-shadow"
                        placeholder="e.g. CS101 - Introduction to Algorithms"
                        type="text"
                        required
                        disabled={cooldownSeconds > 0}
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                    />
                </div>

                {/* Presenter Email */}
                <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                        <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                            Email
                        </label>
                        <div className="group relative cursor-help">
                            <span className="material-symbols-outlined text-base text-primary dark:text-blue-400">info</span>
                            <div className="absolute bottom-full left-full -translate-x-[10%] mb-2 w-48 p-2 bg-inverse-surface dark:bg-neutral-800 text-inverse-on-surface dark:text-neutral-200 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-20">
                                We’ll email your final attendance report here.
                            </div>
                        </div>
                    </div>
                    <input
                        className="w-full px-4 py-3 bg-surface-container-low dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 rounded-lg text-on-surface dark:text-white placeholder:text-outline dark:placeholder:text-neutral-500 transition-all form-input-shadow"
                        placeholder="lecturer@university.edu"
                        type="email"
                        required
                        disabled={cooldownSeconds > 0}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Duration Select */}
                <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                        Session Duration
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {[5, 10, 15].map((time) => (
                            <button
                                key={time}
                                type="button"
                                disabled={cooldownSeconds > 0}
                                onClick={() => setDurationMinutes(time)}
                                className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                                    durationMinutes === time
                                        ? 'bg-primary dark:bg-blue-600 text-white'
                                        : 'bg-surface-container-highest dark:bg-neutral-800 text-on-surface dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                }`}
                            >
                                {time}m
                            </button>
                        ))}
                    </div>
                </div>

                {/* Security & Verification Toggles */}
                <div className="space-y-4 pt-4">
                    {/* GPS Toggle */}
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-semibold block text-on-surface dark:text-white">GPS Verification</span>
                            <span className="text-xs text-on-surface-variant dark:text-neutral-400">Lock to classroom area (50m)</span>
                        </div>
                        <button
                            type="button"
                            disabled={cooldownSeconds > 0}
                            onClick={() => setGpsEnabled(!gpsEnabled)}
                            className={`w-11 h-6 rounded-full relative transition-colors ${
                                gpsEnabled ? 'bg-secondary dark:bg-blue-600' : 'bg-surface-container-highest dark:bg-neutral-700'
                            }`}
                        >
                            <span
                                className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-200 ${
                                    gpsEnabled ? 'right-1' : 'left-1'
                                }`}
                            />
                        </button>
                    </div>

                    {/* Strict Device ID Toggle */}
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-on-surface dark:text-white">Strict Device ID (Anti-Proxy)</span>
                            <span className="text-xs text-on-surface-variant dark:text-neutral-400">One submission per physical hardware device</span>
                        </div>
                        <button
                            type="button"
                            disabled={cooldownSeconds > 0}
                            onClick={() => setStrictDeviceId(!strictDeviceId)}
                            className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                                strictDeviceId ? 'bg-secondary dark:bg-blue-600' : 'bg-surface-container-highest dark:bg-neutral-700'
                            }`}
                        >
                            <span
                                className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-transform duration-200 ${
                                    strictDeviceId ? 'right-1' : 'left-1'
                                }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Submit Button with Dynamic Countdown */}
                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={loading || cooldownSeconds > 0}
                        className={`w-full py-4 text-white font-bold rounded-lg transition-all flex items-center justify-center space-x-2 ${
                            cooldownSeconds > 0
                                ? 'bg-neutral-500 dark:bg-neutral-800 cursor-not-allowed opacity-90'
                                : 'bg-primary dark:bg-blue-600 hover:bg-primary/90 dark:hover:bg-blue-500 disabled:opacity-50'
                        }`}
                    >
                        {cooldownSeconds > 0 ? (
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">schedule</span>
                                Cooldown Active: Available in {formatTimer(cooldownSeconds)}
                            </span>
                        ) : loading ? (
                            <span>{gpsEnabled ? 'Acquiring GPS...' : 'Creating Session...'}</span>
                        ) : (
                            <span>Generate Smart QR Code</span>
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
}
