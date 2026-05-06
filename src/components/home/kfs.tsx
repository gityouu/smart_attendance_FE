import React from "react";

export default function KFs() {

    return(
        <section className={"py-24 bg-surface-container-low dark:bg-neutral-900 border-t border-transparent " +
            "dark:border-neutral-800"}>

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold font-manrope mb-12 text-center text-on-surface dark:text-white">

                    Built for Modern Institutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className={"md:col-span-2 bg-surface-container-lowest dark:bg-neutral-950 p-8 rounded-xl " +
                        "space-y-4 border border-outline-variant/10 dark:border-neutral-800"}>

                            <span className={"material-symbols-outlined text-4xl text-primary dark:text-primary-fixed-dim"}
                                  data-icon="security_update_good">

                                security_update_good
                            </span>

                        <h3 className="text-2xl font-bold font-manrope text-on-surface dark:text-white">

                            Dynamic Security
                        </h3>

                        <p className="text-on-surface-variant dark:text-neutral-400">

                            QR codes rotate every 15 seconds, making it impossible to share pictures or bypass the
                            verification window.
                        </p>
                    </div>

                    <div className={"bg-surface-container-lowest dark:bg-neutral-950 p-8 rounded-xl space-y-4 " +
                        "border border-outline-variant/10 dark:border-neutral-800"}>

                            <span className={"material-symbols-outlined text-4xl text-secondary dark:text-secondary-fixed"}
                                  data-icon="cloud_done">

                                cloud_done
                            </span>

                        <h3 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                            Zero Hardware
                        </h3>

                        <p className="text-on-surface-variant dark:text-neutral-400 text-sm">

                            100% web-based. Use any screen and any modern smartphone.
                        </p>
                    </div>

                    <div className={"bg-surface-container-lowest dark:bg-neutral-950 p-8 rounded-xl space-y-4 " +
                        "border border-outline-variant/10 dark:border-neutral-800"}>

                            <span className={"material-symbols-outlined text-4xl text-error dark:text-error-container"}
                                  data-icon="fmd_bad">

                                fmd_bad
                            </span>

                        <h3 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                            Fraud Prevention
                        </h3>
                        <p className="text-on-surface-variant dark:text-neutral-400 text-sm">

                            GPS fencing &amp; Device ID locking ensures "One Person, One Attendance".
                        </p>
                    </div>

                    <div className={"md:col-span-4 bg-primary dark:bg-on-dark-mode text-on-primary p-12 rounded-xl " +
                        "flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"}>

                        <div className={"absolute inset-0 bg-linear-to-r from-primary-container to-transparent " +
                            "opacity-50"}></div>

                        <div className="relative z-10 flex-1 space-y-4">

                            <h3 className="text-3xl font-bold font-manrope text-white">

                                Real-time Reporting
                            </h3>

                            <p className="text-on-primary-container text-lg max-w-xl">
                                Automate your entire reporting pipeline. Export attendance history to Excel, CSV, or
                                integrate directly with your LMS via API.
                            </p>
                        </div>

                        <div className="relative z-10">

                                <span className="material-symbols-outlined text-[8rem] opacity-20"
                                      data-icon="data_exploration">

                                    data_exploration
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
