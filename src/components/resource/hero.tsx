import React from "react";

export default function ResourceHero() {

    return (
        <header className="pt-16 pb-12 px-6 text-center max-w-4xl mx-auto space-y-6">

            <div className={"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container " +
                "dark:bg-secondary/20 text-on-secondary-container dark:text-secondary-fixed text-xs font-bold " +
                "tracking-widest uppercase"}>

                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

                Knowledge Base &amp; Toolkits
            </div>

            <h1 className={"text-4xl sm:text-6xl font-extrabold font-headline tracking-tight text-on-surface " +
                "dark:text-white leading-[1.15]"}>

                Everything Needed for <br />

                <span className="text-primary dark:text-primary-fixed-dim">Friction-Free Verification.</span>
            </h1>

            <p className={"text-lg sm:text-xl text-on-surface-variant dark:text-neutral-400 max-w-2xl mx-auto " +
                "leading-relaxed"}>

                Classroom presentation slides, student device permission guides, security breakdowns, and gradebook
                export templates.
            </p>
        </header>
    )
}
