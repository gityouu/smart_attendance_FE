import React from "react";

export default function Problem(){

    return (
        <section className={"py-24 bg-surface-container-low dark:bg-neutral-900 border-y border-transparent " +
            "dark:border-neutral-800"}>

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16 space-y-4">

                    <h2 className={"text-4xl md:text-5xl font-extrabold font-manrope tracking-tight text-on-surface " +
                        "dark:text-white"}>

                        Why Traditional Attendance Fails
                    </h2>

                    <p className="text-on-surface-variant dark:text-neutral-400 max-w-2xl mx-auto text-lg">

                        Manual systems and outdated hardware are the biggest leaks in institutional productivity.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className={"bg-surface-container-lowest dark:bg-neutral-950 p-10 rounded-xl space-y-6 " +
                        "flex flex-col border border-transparent dark:border-neutral-800 transition-all " +
                        "hover:-translate-y-2"}>

                        <div className={"w-14 h-14 bg-error-container/20 dark:bg-error/20 rounded-full flex " +
                            "items-center justify-center text-error"}>

                            <span className="material-symbols-outlined text-3xl" data-icon="edit_note">edit_note</span>
                        </div>

                        <h3 className="text-2xl font-bold font-manrope text-on-surface dark:text-white">

                            The 'Sign-for-a-Friend' Loophole
                        </h3>

                        <p className="text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Proxy attendance costs institutions thousands in misallocated resources and diluted
                            academic integrity.
                        </p>
                    </div>

                    <div className={"bg-surface-container-lowest dark:bg-neutral-950 p-10 rounded-xl space-y-6 " +
                        "flex flex-col border border-transparent dark:border-neutral-800 transition-all" +
                        " hover:-translate-y-2"}>

                        <div className={"w-14 h-14 bg-tertiary-fixed/20 dark:bg-tertiary/20 rounded-full flex " +
                            "items-center justify-center text-tertiary dark:text-tertiary-fixed"}>

                                <span className="material-symbols-outlined text-3xl" data-icon="settings_input_component">

                                    settings_input_component
                                </span>
                        </div>

                        <h3 className="text-2xl font-bold font-manrope text-on-surface dark:text-white">

                            Hardware Costs &amp; Maintenance
                        </h3>
                        <p className="text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Biometric scanners and swipe cards are expensive to install, prone to breakdown,
                            and difficult to scale.
                        </p>
                    </div>

                    <div className={"bg-surface-container-lowest dark:bg-neutral-950 p-10 rounded-xl space-y-6 " +
                        "flex flex-col border border-transparent dark:border-neutral-800 transition-all " +
                        "hover:-translate-y-2"}>

                        <div className={"w-14 h-14 bg-primary-fixed/20 dark:bg-primary/20 rounded-full " +
                            "flex items-center justify-center text-primary dark:text-primary-fixed-dim"}>

                            <span className="material-symbols-outlined text-3xl" data-icon="inventory">inventory</span>
                        </div>

                        <h3 className="text-2xl font-bold font-manrope text-on-surface dark:text-white">

                            Administrative Data Entry
                        </h3>
                        <p className="text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Staff spend hours manually digitizing paper sheets, leading to high error rates and
                            delayed reporting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
