import React from 'react';
import { CheckInLabelProps } from "../../types/attendance";

export default function CheckInLabel({ sessionName }: CheckInLabelProps) {
    return (
        <section className="mb-8">
            <div className="bg-surface-container-lowest dark:bg-neutral-900 rounded-2xl p-5 shadow-[0_-8px_40px_rgba(28,27,27,0.02)] border border-outline-variant/10 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-2">
          <span className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant/70 dark:text-neutral-400">
            Current Session
          </span>
                    <div className="flex items-center gap-1.5 bg-green-100 dark:bg-green-950/60 px-2.5 py-1 rounded-full border border-green-200 dark:border-green-800">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                        <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-tight">
              Live
            </span>
                    </div>
                </div>
                <h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface dark:text-white">
                    {sessionName || 'Loading...'}
                </h2>
            </div>
        </section>
    );
}

