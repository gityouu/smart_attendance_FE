import React from 'react';
import { FailureOverlayProps } from "../../types/attendance";
import { getContent } from "../../context/getContent";

export const FailureOverlay: React.FC<FailureOverlayProps> = ({ type, course, onReset }) => {
    const details = getContent(type) ?? {
        icon: 'warning',
        badge: 'Verification Blocked',
        badgeColor: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
        title: 'Check-In Blocked',
        description: 'Unable to verify your attendance for this session.',
        tip: 'Please notify your lecturer or meeting organizer.'
    };

    return (
        <aside
            aria-label="Attendance Verification Blocked"
            className="fixed inset-0 z-50 bg-[#fcf9f8] dark:bg-neutral-950 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-200 transition-colors"
        >
            <div className="max-w-sm w-full space-y-6">
                {/* Visual Icon Badge */}
                <div className="w-20 h-20 mx-auto rounded-3xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 flex items-center justify-center shadow-lg dark:shadow-black/50">
                    <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-4xl">
                        {details.icon}
                    </span>
                </div>

                {/* Status Badging */}
                <div className="space-y-2">
                    <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${details.badgeColor}`}
                    >
                        {details.badge}
                    </span>
                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-headline">
                        {details.title}
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        {details.description}
                    </p>
                </div>

                {/* Explanation Card */}
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-left text-xs space-y-1">
                    <span className="font-bold text-neutral-700 dark:text-neutral-300 block">
                        Session: {course || 'Active Session'}
                    </span>
                    <p className="text-neutral-500 dark:text-neutral-400 leading-normal">
                        {details.tip}
                    </p>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                    {onReset && (
                        <button
                            type="button"
                            onClick={onReset}
                            className="w-full py-3 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-xl text-xs font-bold transition-all"
                        >
                            Back to Form
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
};
