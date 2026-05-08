import React from "react";

export default function Table() {

    return (
        <section className={"py-20 px-6 bg-surface-container-low dark:bg-neutral-900 border-y border-outline-variant/20 " +
            "dark:border-neutral-800"}>

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-12 space-y-2">

                    <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-fixed-dim">

                        Detailed Matrix
                    </span>


                    <h2 className="text-3xl font-extrabold font-headline text-on-surface dark:text-white">
                        Compare All Features
                    </h2>
                </div>

            <div className={"overflow-x-auto rounded-2xl border border-outline-variant/30 dark:border-neutral-800 " +
                "bg-surface-container-lowest dark:bg-neutral-900 shadow-sm"}>

                <table className="w-full text-left text-sm">

                    <thead className={"bg-surface-container-high/60 dark:bg-neutral-800/70 font-headline uppercase " +
                    "text-xs font-bold text-on-surface-variant dark:text-neutral-300 border-b border-outline-variant/20 " +
                    "dark:border-neutral-800"}>

                    <tr>
                        <th className="p-4 sm:p-5">Capability</th>

                        <th className="p-4 sm:p-5">Ad-Hoc (Free)</th>

                        <th className="p-4 sm:p-5 text-primary dark:text-primary-fixed">Pro Educator</th>

                        <th className="p-4 sm:p-5">Campus Enterprise</th>
                    </tr>
                    </thead>

                    <tbody className={"divide-y divide-outline-variant/20 dark:divide-neutral-800 text-on-surface " +
                        "dark:text-neutral-200"}>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Max Students / Session
                        </td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">25</td>

                        <td className="p-4 sm:p-5 font-bold text-primary dark:text-primary-fixed">400</td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            Unlimited (1,000+)
                        </td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Dynamic Token Window
                        </td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">30s Fixed</td>

                        <td className="p-4 sm:p-5">Custom (10s – 60s)</td>

                        <td className="p-4 sm:p-5">Custom &amp; Tunable</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Haversine GPS Radius
                        </td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">50m Fixed</td>

                        <td className="p-4 sm:p-5">Adjustable (15m – 100m)</td>

                        <td className="p-4 sm:p-5">Polygon Multi-Zone</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Hardware Device Locks
                        </td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">Active</td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            Active + Flag Alert
                        </td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            Active + Audit Trail
                        </td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Historical Storage
                        </td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">

                            24 Hours (Email only)
                        </td>

                        <td className="p-4 sm:p-5">Permanent</td>

                        <td className="p-4 sm:p-5">Permanent + Cloud Backup</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">LMS Integration</td>

                        <td className="p-4 sm:p-5 text-on-surface-variant dark:text-neutral-400">—</td>

                        <td className="p-4 sm:p-5">CSV Roster Export</td>

                        <td className="p-4 sm:p-5 font-bold text-primary dark:text-primary-fixed">

                            Direct API &amp; Canvas LTI
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </section>
    );
}
