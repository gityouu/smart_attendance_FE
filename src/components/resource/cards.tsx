import React from "react";
import { quickAccessCardsProps } from "../../types/resource";

export default function QuickAccessCards({ setActiveFilter }: quickAccessCardsProps) {

    return (
        <section className="px-6 py-8 max-w-7xl mx-auto w-full">

            <div className="grid md:grid-cols-3 gap-6">

                <div className={"bg-surface-container-lowest dark:bg-neutral-900 p-8 rounded-3xl border " +
                    "border-outline-variant/30 dark:border-neutral-800 shadow-sm flex flex-col justify-between"}>

                    <div className="space-y-4">

                        <div className={"w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center " +
                            "justify-center text-primary dark:text-primary-fixed"}>

                            <span className="material-symbols-outlined text-2xl">school</span>
                        </div>

                        <h3 className="text-xl font-extrabold font-headline text-on-surface dark:text-white">

                            For Lecturers
                        </h3>

                        <p className="text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Get classroom slide templates and learn how to run 30-second verification on hall
                            projectors without installing software.
                        </p>
                    </div>

                    <button onClick={() => setActiveFilter('toolkits')} className={"mt-6 text-primary " +
                        "dark:text-primary-fixed font-bold text-xs flex items-center gap-1 hover:gap-2 " +
                        "transition-all"}>

                        <span>Browse Educator Guides</span>

                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>

                <div className={"bg-surface-container-lowest dark:bg-neutral-900 p-8 rounded-3xl border " +
                    "border-outline-variant/30 dark:border-neutral-800 shadow-sm flex flex-col justify-between"}>

                    <div className="space-y-4">

                        <div className={"w-12 h-12 rounded-2xl bg-secondary/10 dark:bg-secondary/20 flex items-center " +
                            "justify-center text-secondary dark:text-secondary-fixed"}>

                            <span className="material-symbols-outlined text-2xl">smartphone</span>
                        </div>

                        <h3 className="text-xl font-extrabold font-headline text-on-surface dark:text-white">

                            For Students
                        </h3>

                        <p className="text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Learn why browser location is needed once, how hardware function, and how student
                            data stays anonymous.
                        </p>
                    </div>

                    <button onClick={() => setActiveFilter('students')} className={"mt-6 text-secondary " +
                        "dark:text-secondary-fixed font-bold text-xs flex items-center gap-1 hover:gap-2 " +
                        "transition-all"}>

                        <span>Read Student FAQ</span>

                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>

                <div className={"bg-surface-container-lowest dark:bg-neutral-900 p-8 rounded-3xl border " +
                    "border-outline-variant/30 dark:border-neutral-800 shadow-sm flex flex-col justify-between"}>

                    <div className="space-y-4">

                        <div className={"w-12 h-12 rounded-2xl bg-tertiary-fixed-dim/20 dark:bg-primary/20 flex " +
                            "items-center justify-center text-primary dark:text-primary-fixed"}>

                            <span className="material-symbols-outlined text-2xl">dataset</span>
                        </div>

                        <h3 className="text-xl font-extrabold font-headline text-on-surface dark:text-white">

                            For LMS &amp; Data Admins
                        </h3>

                        <p className="text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                            Formatted CSV and spreadsheet import schemes ready for gradebook ingestion in Canvas,
                            Blackboard, and Moodle.
                        </p>
                    </div>

                    <button onClick={() => setActiveFilter('integrations')} className={"mt-6 text-primary " +
                        "dark:text-primary-fixed font-bold text-xs flex items-center gap-1 hover:gap-2 " +
                        "transition-all"}>

                        <span>View Gradebook Templates</span>

                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
