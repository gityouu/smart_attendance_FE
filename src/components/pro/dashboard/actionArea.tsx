import React from "react";

export default function ActionArea() {
    return (
        <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-extrabold font-headline tracking-tight text-neutral-900 dark:text-white">
                        Quick Session Launcher
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        1-click launch from saved templates or start an immediate unconfigured session
                    </p>
                </div>

                {/* Start Instant Session Primary Action */}
                <button
                    type="button"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 self-start sm:self-auto"
                >
                    <span className="material-symbols-outlined text-base">sensors</span>
                    <span>Start Instant Session</span>
                </button>
            </div>

            {/* Saved Presets Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">

                {/* Preset Card 1 */}
                <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    Preset
                  </span>
                            <span className="text-[11px] font-bold text-neutral-400 font-mono">15m Window</span>
                        </div>
                        <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                            Room 204 - Operating Systems
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 pt-1 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">radar</span>
                    25m Radius
                  </span>
                            <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    Hall GPS Locked
                  </span>
                        </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                        <button type="button" className="text-xs font-semibold text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200" title="Edit Parameters">
                            Edit
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-sm">play_arrow</span>
                            <span>Launch</span>
                        </button>
                    </div>
                </div>

                {/* Preset Card 2 */}
                <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    Preset
                  </span>
                            <span className="text-[11px] font-bold text-neutral-400 font-mono">30m Window</span>
                        </div>
                        <h3 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                            Lab 3 - Distributed Systems
                        </h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500 dark:text-neutral-400 pt-1 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">security</span>
                    Strict Anti-Proxy ON
                  </span>
                            <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">radar</span>
                    20m Lab Radius
                  </span>
                        </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                        <button type="button" className="text-xs font-semibold text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200" title="Edit Parameters">
                            Edit
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 active:scale-95"
                        >
                            <span className="material-symbols-outlined text-sm">play_arrow</span>
                            <span>Launch</span>
                        </button>
                    </div>
                </div>

                {/* Add New Preset Card Placeholder */}
                <div className="p-5 rounded-2xl border-2 border-dashed border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 bg-neutral-50/50 dark:bg-neutral-900/40 flex flex-col items-center justify-center text-center transition-colors cursor-pointer group min-h-42.5">
                    <div className="w-10 h-10 rounded-2xl bg-neutral-200/70 dark:bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105 transition-all mb-2">
                        <span className="material-symbols-outlined text-xl">bookmark_add</span>
                    </div>
                    <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Save New Preset
                    </h4>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                        Lock classroom coordinates and geofence for 1-click starts
                    </p>
                </div>

            </div>
        </section>
    )
}
