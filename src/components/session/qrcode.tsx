import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeProps } from "../../types/attendance";

export default function QRCode({ sessionId, initialToken, rotationIntervalSeconds = 30, onOpenDashboard,}: QRCodeProps){
    const [currentToken, setCurrentToken] = useState<string>(initialToken || '');
    const [secondsRemaining, setSecondsRemaining] = useState<number>(rotationIntervalSeconds);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // Sync initial token whenever a new session is passed
    useEffect(() => {
        if (initialToken) {
            setCurrentToken(initialToken);
            setSecondsRemaining(rotationIntervalSeconds);
        }
    }, [initialToken, rotationIntervalSeconds]);

    // Client-side visual sync & rotation countdown
    useEffect(() => {
        if (!sessionId) return;

        const timer = setInterval(() => {
            setSecondsRemaining((prev) => {
                if (prev <= 1) {
                    // Compute client-side rolling entropy token matching the rotation window
                    const timestamp = Math.floor(Date.now() / 1000);
                    const localEntropy = Math.random().toString(36).substring(2, 10);
                    const nextNonce = btoa(`${sessionId}:${timestamp}:${localEntropy}`);

                    setCurrentToken(nextNonce);
                    return rotationIntervalSeconds;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [sessionId, rotationIntervalSeconds]);

    // Construct target check-in URL for mobile scanners
    const origin = window.location.origin;
    const scanUrl = sessionId
        ? `${origin}/student-check-in/${sessionId}?t=${encodeURIComponent(currentToken)}`
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
                        <span className="text-neutral-400 text-xs font-mono">
              Refreshing token in {secondsRemaining}s
            </span>
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
                        <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 font-bold">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                            <span>Session Live</span>
                        </div>

                        <p className="text-xs text-on-surface-variant dark:text-neutral-400 font-mono">
                            Rotating token in {secondsRemaining}s
                        </p>

                        <button
                            type="button"
                            onClick={onOpenDashboard}
                            className="px-6 py-2 bg-secondary dark:bg-blue-600 hover:dark:bg-blue-500 text-on-secondary text-white rounded-full font-bold flex items-center space-x-2 mx-auto hover:scale-105 active:scale-95 transition-transform"
                        >
                            <span>Open Live Dashboard</span>
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

