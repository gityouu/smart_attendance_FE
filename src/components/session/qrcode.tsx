import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { toast } from 'sonner';
import { ExtendedQRCodeProps } from "../../types/attendance";
import { endSessionApi, refreshSessionTokenApi } from "../../api/sessionApi";

export default function QRCode({ sessionId, initialToken, rotationIntervalSeconds = 30, durationMinutes = 5,
                                   tier = 'free', onOpenDashboard, onSessionExpired, audience = 'school',
                               }: ExtendedQRCodeProps) {
    const [currentToken, setCurrentToken] = useState<string>(initialToken || '');
    const [, setSecondsRemaining] = useState<number>(rotationIntervalSeconds);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isExpired, setIsExpired] = useState<boolean>(false);
    const [isEnding, setIsEnding] = useState<boolean>(false);

    // Track elapsed time for duration milestone toasts
    const hasWarnedRef = useRef<boolean>(false);
    const elapsedSecondsRef = useRef<number>(0);

    // Reset state on new session
    useEffect(() => {
        if (initialToken) {
            setCurrentToken(initialToken);
            setSecondsRemaining(rotationIntervalSeconds);
            setIsExpired(false);
            hasWarnedRef.current = false;
            elapsedSecondsRef.current = 0;
            setIsEnding(false);
        }
    }, [initialToken, rotationIntervalSeconds]);

    // Token rotation & Session time-remaining toasts
    useEffect(() => {
        if (!sessionId || isExpired) return;

        const totalSessionSeconds = durationMinutes * 60;

        let warningThresholdSeconds = 60;
        if (durationMinutes === 10) {
            warningThresholdSeconds = 180;
        } else if (durationMinutes === 15) {
            warningThresholdSeconds = 300;
        }

        const handleTokenRefresh = async () => {
            try {
                const nextToken = await refreshSessionTokenApi(sessionId);
                setCurrentToken(nextToken);
            } catch (err: unknown) {
                const apiError = err as Error & { status?: number };
                if (apiError.status === 403 || apiError.status === 404) {
                    setIsExpired(true);
                    if (onSessionExpired) {
                        onSessionExpired();
                    }
                }
            }
        };

        const timer = setInterval(() => {
            elapsedSecondsRef.current += 1;
            const remainingSessionSeconds = totalSessionSeconds - elapsedSecondsRef.current;

            if (!hasWarnedRef.current && remainingSessionSeconds <= warningThresholdSeconds && remainingSessionSeconds
                > 0) {
                hasWarnedRef.current = true;
                const minutesLeft = Math.round(warningThresholdSeconds / 60);

                toast.warning('Session Ending Soon', {
                    description: `Your live session has ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''} remaining. 
                    Attendees should finalize their check-in.`,
                    duration: 10000,
                });
            }

            setSecondsRemaining((prev) => {
                if (prev <= 1) {
                    handleTokenRefresh();
                    return rotationIntervalSeconds;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [sessionId, rotationIntervalSeconds, isExpired, durationMinutes, onSessionExpired]);

    const handleDashboardClick = () => {
        if (tier === 'free') {
            toast.info('Pro Feature', {
                description: 'Live check-in dashboards are available on the Pro tier. Your full attendance CSV report ' +
                    'will be emailed once this session concludes.',
                action: {
                    label: 'View Plans',
                    onClick: () => (window.location.href = '/pricing'),
                },
                duration: 8000,
            });
            return;
        }

        if (onOpenDashboard) {
            onOpenDashboard();
        }
    };

    const handleEndSession = async () => {
        if (!sessionId || isEnding) return;

        setIsEnding(true);
        try {
            await endSessionApi(sessionId);
            toast.success('Session Ended', {
                description: 'Attendance report has been emailed to the host.',
            });

            // Notify parent to reset QR and trigger host cooldown
            if (onSessionExpired) {
                onSessionExpired();
            }
        } catch (err: unknown) {
            const apiError = err as Error;
            toast.error('Error ending session', {
                description: apiError.message || 'Could not end session.',
            });
        } finally {
            setIsEnding(false);
        }
    };

    const origin = window.location.origin;
    const tokenParamKey = audience === 'corporate' ? 'tc' : 'ts';

    const scanUrl = sessionId
        ? `${origin}/check-in/${sessionId}?${tokenParamKey}=${encodeURIComponent(currentToken)}`
        : '';

    return (
        <section className="flex-1 bg-surface-container-low dark:bg-neutral-950/60 p-8 lg:p-12 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-surface-container dark:border-neutral-800">
            {/* Fullscreen Projector Modal */}
            {isExpanded && sessionId && (
                <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6 animate-in fade-in duration-200">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <span className="material-symbols-outlined text-3xl">close</span>
                    </button>

                    <div className="bg-white p-8 rounded-3xl shadow-2xl">
                        <QRCodeSVG
                            value={scanUrl}
                            size={Math.min(window.innerHeight * 0.55, 450)}
                            level="H"
                            marginSize={2}
                        />
                    </div>

                    <div className="mt-6 flex flex-col items-center gap-2">
                        <p className="text-white text-xl font-bold tracking-widest uppercase animate-pulse">
                            Scan to Check In
                        </p>
                    </div>
                </div>
            )}

            {/* Default State: Waiting for form submission */}
            {!sessionId ? (
                <div className="text-center opacity-40">
                    <div className="w-52 h-52 bg-neutral-200/60 dark:bg-neutral-800/40 rounded-2xl flex items-center justify-center border-2 border-dashed border-neutral-400 dark:border-neutral-600 mx-auto">
                        <span className="material-symbols-outlined text-6xl text-neutral-500 dark:text-neutral-400">
                            qr_code_2
                        </span>
                    </div>
                    <p className="mt-4 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                        Waiting for session configuration...
                    </p>
                </div>
            ) : (
                /* Active State: Displaying Live Dynamic QR */
                <div className="text-center animate-in fade-in zoom-in duration-300">
                    <div className="relative group inline-block">
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-transparent dark:border-neutral-700">
                            <QRCodeSVG
                                value={scanUrl}
                                size={220}
                                level="H"
                                marginSize={4}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsExpanded(true)}
                            className="absolute -top-3 -right-3 bg-primary dark:bg-blue-600 text-on-primary text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
                            title="Expand QR Code"
                        >
                            <span className="material-symbols-outlined text-2xl">fullscreen</span>
                        </button>
                    </div>

                    <div className="mt-6 space-y-4">
                        {isExpired ? (
                            <div className="flex items-center justify-center space-x-2 text-red-500 font-bold">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <span>Session Expired</span>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 font-bold">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                <span>Session Live</span>
                            </div>
                        )}

                        <div className="flex flex-col items-center gap-2 pt-1">
                            {/* Live Dashboard Button with Pro Lock Badge */}
                            <button
                                type="button"
                                onClick={handleDashboardClick}
                                className="group relative px-6 py-2.5 bg-neutral-900 dark:bg-neutral-800 text-white rounded-full font-bold flex items-center space-x-2 mx-auto hover:bg-neutral-800 dark:hover:bg-neutral-700 active:scale-95 transition-all shadow-md"
                            >
                                <span>Open Live Dashboard</span>

                                {tier === 'free' ? (
                                    <span className="ml-1.5 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-amber-400 text-neutral-900 rounded-full flex items-center gap-1 shadow-xs">
                                        <span className="material-symbols-outlined text-[12px]">lock</span>
                                        PRO
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                )}
                            </button>

                            {/* End Session Early Button */}
                            <button
                                type="button"
                                onClick={handleEndSession}
                                disabled={isEnding || isExpired}
                                className="px-5 py-2 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-full border border-red-200 dark:border-red-900/60 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                            >
                                <span className="material-symbols-outlined text-base">stop_circle</span>
                                <span>{isEnding ? 'Finalizing...' : 'End Session Early'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
