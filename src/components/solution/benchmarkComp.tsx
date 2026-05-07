import React from 'react';

export default function Table() {

    return (
        <section className={"py-20 px-6 bg-surface-container-low dark:bg-neutral-900 border-y " +
            "border-outline-variant/20 dark:border-neutral-800"}>

            <div className="max-w-5xl mx-auto">

            <div className="text-center mb-14 space-y-3">

                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-fixed-dim">

                    Benchmark Comparison
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold font-headline text-on-surface dark:text-white">

                    How Formally Stacks Up
                </h2>

                <p className="text-on-surface-variant dark:text-neutral-400 max-w-xl mx-auto text-sm">

                    Why universities and institutions are replacing legacy check-in methods.
                </p>
            </div>

            <div className={"overflow-x-auto rounded-2xl border border-outline-variant/30 dark:border-neutral-800 " +
                "bg-surface-container-lowest dark:bg-neutral-900 shadow-sm"}>

                <table className="w-full text-left text-sm">

                    <thead className={"bg-surface-container-high/60 dark:bg-neutral-800/70 font-headline uppercase " +
                        "text-xs font-bold text-on-surface-variant dark:text-neutral-300 border-b " +
                        "border-outline-variant/20 dark:border-neutral-800"}>

                    <tr>

                        <th className="p-4 sm:p-5">Feature</th>

                        <th className="p-4 sm:p-5 text-primary-container dark:text-primary-fixed">Formally SaaS</th>

                        <th className="p-4 sm:p-5">Paper Roll Sheets</th>

                        <th className="p-4 sm:p-5">Biometrics / Dongles</th>

                        <th className="p-4 sm:p-5">Static QR Codes</th>
                    </tr>
                    </thead>

                    <tbody className={"divide-y divide-outline-variant/20 dark:divide-neutral-800 text-on-surface " +
                        "dark:text-neutral-200"}>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Anti-Proxy Integrity
                        </td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            Dynamic (GPS + Device Key)
                        </td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">Zero (Easy to forge)</td>

                        <td className="p-4 sm:p-5">High (Physical scan)</td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">Zero (Shared screenshots)</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Hardware Upfront Cost
                        </td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            $0 (Utility Web)
                        </td>

                        <td className="p-4 sm:p-5">$0 (Paper costs only)</td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">$3,000+ per hall</td>

                        <td className="p-4 sm:p-5">$0</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">Check-in Latency</td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            &lt; 10s per student
                        </td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">15–20 minutes lost</td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">Long queue bottlenecks</td>

                        <td className="p-4 sm:p-5">&lt; 10s</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Student App Download
                        </td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            None (Browser native)
                        </td>

                        <td className="p-4 sm:p-5">None</td>

                        <td className="p-4 sm:p-5">None (Card swipe)</td>

                        <td className="p-4 sm:p-5">None</td>
                    </tr>

                    <tr className="hover:bg-neutral-500/5 transition-colors">

                        <td className="p-4 sm:p-5 font-semibold text-on-surface dark:text-white">

                            Automatic Ledger Export
                        </td>

                        <td className="p-4 sm:p-5 font-bold text-secondary dark:text-secondary-fixed">

                            Real-time CSV &amp; Email
                        </td>

                        <td className="p-4 sm:p-5 text-error dark:text-red-400">Manual typing required</td>

                        <td className="p-4 sm:p-5">Proprietary DB export</td>

                        <td className="p-4 sm:p-5">Google Forms sync</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </section>
    );
}
