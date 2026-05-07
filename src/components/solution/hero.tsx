import React from "react";

export default function SolutionHero() {

    return(
        <header className={"relative pt-16 pb-20 px-6 border-b border-outline-variant/20 dark:border-neutral-800 " +
            "bg-linear-to-b from-surface to-surface-container-low dark:from-neutral-950 dark:to-neutral-900"}>

            <div className="max-w-4xl mx-auto text-center space-y-6">

                <div className={"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container " +
                    "dark:bg-secondary/20 text-on-secondary-container dark:text-secondary-fixed text-xs font-bold " +
                    "tracking-widest uppercase"}>

                    <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>

                    Architected for Institutional Integrity
                </div>

                <h1 className={"text-4xl sm:text-6xl font-extrabold font-headline tracking-tight leading-[1.15] " +
                    "text-on-surface dark:text-white"}>

                    Engineered for High-Density Auditoriums &amp; Corporate Teams.
                </h1>

                <p className={"text-lg sm:text-xl text-on-surface-variant dark:text-neutral-400 max-w-2xl mx-auto " +
                    "leading-relaxed"}>

                    Formally replaces vulnerable paper attendance lists and sluggish biometric hardware with
                    verified, browser-level hardware constraints.
                </p>
            </div>
        </header>
    )
}
