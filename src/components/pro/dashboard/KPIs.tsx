import React from "react";

export default function KPIs(){
    return(
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* KPI 1: All-Time Verified Attendees */}
            <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <span>All-Time Verified Attendees</span>
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg">
                verified
              </span>
                </div>
                <div className="mt-4">
                    <span className="text-3xl font-extrabold font-headline">2,418</span>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">Legitimate physical sign-ins logged</p>
                </div>
            </div>

            {/* KPI 2: Total Completed Sessions */}
            <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <span>Total Completed Sessions</span>
                    <span className="material-symbols-outlined text-emerald-500 text-lg">
                task_alt
              </span>
                </div>
                <div className="mt-4">
                    <span className="text-3xl font-extrabold font-headline">54</span>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">Archived in persistent database</p>
                </div>
            </div>

            {/* KPI 3: Flagged / Quarantined Devices */}
            <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <span>Flagged / Quarantined Devices</span>
                    <span className="material-symbols-outlined text-red-500 text-lg">
                shield_with_heart
              </span>
                </div>
                <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold font-headline text-red-600 dark:text-red-400">47</span>
                        <span className="text-xs text-neutral-400">Blocked Attempts</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-1">Hardware collision &amp; out-of-bounds</p>
                </div>
            </div>

        </section>
    )
}
