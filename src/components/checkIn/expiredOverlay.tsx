import React from 'react';
import { ExpiredOverlayProps } from "../../types/attendance";

export const ExpiredOverlay: React.FC<ExpiredOverlayProps> = ({ sessionName, lifecycleState = 'completed' }) => {
    const isCompleted = lifecycleState === 'completed';

    return (
        <aside aria-label="Session Closed" className="fixed inset-0 z-50 bg-[#fcf9f8] dark:bg-neutral-950 flex flex-col items-center justify-center p-6 text-center transition-colors duration-200">
            <div className="max-w-sm w-full space-y-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-4xl">
                        timer_off
                    </span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-headline">
                        Check-In Window Closed
                    </h2>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {isCompleted
                        ? `The host has concluded ${sessionName || 'this session'} and attendance has been locked.`
                        : `The check-in window for ${sessionName || 'this session'} has expired.`}
                    </p>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
                    If you missed the check-in window, please reach out to your instructor or meeting host directly.
                </div>

                <button type="button" onClick={() => window.location.reload()} className="w-full py-3 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-xl text-xs font-bold transition-all">

                    Check Status Again
                </button>
            </div>
        </aside>
    );
};
