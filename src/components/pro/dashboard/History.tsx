import React from "react";

export default function History () {
    return (
        <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-extrabold font-headline tracking-tight text-neutral-900 dark:text-white">
                        Persistent Session History &amp; Export Center
                    </h2>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Chronological archive of all hosted attendance sessions with on-demand spreadsheet downloads
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-400 text-sm">
                  search
                </span>
                        <input
                            type="text"
                            placeholder="Filter sessions..."
                            className="h-9 pl-8 pr-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-1 focus:ring-blue-500 shadow-xs"
                        />
                    </div>
                </div>
            </div>

            {/* Chronological Session Log Table */}
            <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-xs">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                        <thead className="bg-neutral-50 dark:bg-neutral-800/60 uppercase text-[10px] font-bold text-neutral-500 dark:text-neutral-400 border-b border-neutral-200/80 dark:border-neutral-800">
                        <tr>
                            <th className="py-3 px-4">Date &amp; Time</th>
                            <th className="py-3 px-4">Session Label / Preset</th>
                            <th className="py-3 px-4">Duration</th>
                            <th className="py-3 px-4">Total Verified</th>
                            <th className="py-3 px-4">Flagged Count</th>
                            <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80 text-neutral-700 dark:text-neutral-300">

                        {/* Row 1 */}
                        <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono">
                                <span className="font-bold text-neutral-900 dark:text-white block">Nov 10, 2026</span>
                                <span className="text-[11px] text-neutral-400">10:15 AM</span>
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-neutral-900 dark:text-white">
                                Room 204 - Operating Systems
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                                15 min
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        86 Verified
                      </span>
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                        2 Quarantined
                      </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="View Roll Call">
                                        <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Roll Call</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="Export (.xlsx / .csv)">
                                        <span className="material-symbols-outlined text-base">download</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Export</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-400 hover:text-red-600" title="Delete Record">
                                        <span className="material-symbols-outlined text-base">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono">
                                <span className="font-bold text-neutral-900 dark:text-white block">Nov 08, 2026</span>
                                <span className="text-[11px] text-neutral-400">02:00 PM</span>
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-neutral-900 dark:text-white">
                                Lab 3 - Distributed Systems
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                                30 min
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        42 Verified
                      </span>
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-700">
                        0 Flagged
                      </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="View Roll Call">
                                        <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Roll Call</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="Export (.xlsx / .csv)">
                                        <span className="material-symbols-outlined text-base">download</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Export</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-400 hover:text-red-600" title="Delete Record">
                                        <span className="material-symbols-outlined text-base">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
                            <td className="py-3.5 px-4 font-mono">
                                <span className="font-bold text-neutral-900 dark:text-white block">Nov 04, 2026</span>
                                <span className="text-[11px] text-neutral-400">09:00 AM</span>
                            </td>
                            <td className="py-3.5 px-4 font-semibold text-neutral-900 dark:text-white">
                                Instant Ad-Hoc Lecture
                            </td>
                            <td className="py-3.5 px-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                                10 min
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        112 Verified
                      </span>
                            </td>
                            <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                        5 Quarantined
                      </span>
                            </td>
                            <td className="py-3.5 px-4 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="View Roll Call">
                                        <span className="material-symbols-outlined text-base">format_list_bulleted</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Roll Call</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1" title="Export (.xlsx / .csv)">
                                        <span className="material-symbols-outlined text-base">download</span>
                                        <span className="hidden xl:inline text-[11px] font-semibold">Export</span>
                                    </button>
                                    <button type="button" className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 text-neutral-400 hover:text-red-600" title="Delete Record">
                                        <span className="material-symbols-outlined text-base">delete</span>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
