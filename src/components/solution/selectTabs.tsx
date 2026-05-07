import React, {useState} from "react";
import { solutionsData } from "../../types/solution";
import { useAppNavigation } from "../../utils/navigation";

// TODO: replace dummy data with accurate usage data
export default function SelectTabs() {
    const { handleCreateSessionNav } = useAppNavigation();

    const [activeTab, setActiveTab] = useState<'universities' | 'corporate' | 'examinations'>('universities');
    const currentSolution = solutionsData[activeTab];

    return (
        <section className="py-12 px-6 max-w-7xl mx-auto w-full">

            <div className={"relative grid grid-cols-3 p-1.5 bg-surface-container-low dark:bg-neutral-900 " +
                "rounded-2xl max-w-2xl mx-auto border border-outline-variant/30 dark:border-neutral-800"}>

                {/* Sliding Background Pill */}
                <div className={"absolute top-1.5 bottom-1.5 rounded-xl bg-surface-container-lowest " +
                    "dark:bg-neutral-800 shadow-sm transition-transform duration-500 ease-out pointer-events-none"}
                     style={{
                         width: 'calc((100% - 12px) / 3)',
                         left: '6px',
                         transform: `translateX(${
                             activeTab === 'universities'
                                 ? '0%'
                                 : activeTab === 'corporate'
                                     ? '100%'
                                     : '200%'
                         })`,
                     }}
                />

                {/* Tab Buttons */}
                {Object.values(solutionsData).map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`relative z-10 py-2.5 px-3 rounded-xl font-headline font-bold text-xs 
                                sm:text-sm flex items-center justify-center gap-1.5 transition-colors duration-300 
                                ${
                                isActive
                                    ? 'text-primary dark:text-primary-fixed'
                                    : 'text-on-surface-variant dark:text-neutral-400 hover:text-on-surface ' +
                                    'dark:hover:text-white'
                            }`}>

                                <span className="material-symbols-outlined text-lg shrink-0">

                                    {tab.icon}
                                </span>

                            <span className="text-center leading-snug wrap-break-word">

                                    {tab.label}
                                </span>
                        </button>
                    );
                })}
            </div>

            {/* Active Solution Content Card */}
            <div key={activeTab} className={"mt-12 bg-surface-container-lowest dark:bg-neutral-900 rounded-3xl " +
                "p-8 sm:p-12 border border-outline-variant/20 dark:border-neutral-800 shadow-xl " +
                "shadow-surface-container-highest/20 dark:shadow-black/40 grid lg:grid-cols-12 gap-10 items-center " +
                "animate-in fade-in slide-in-from-bottom-3 duration-500"}>

                <div className="lg:col-span-7 space-y-6">

                        <span className={"text-xs font-bold font-headline tracking-widest uppercase text-secondary " +
                            "dark:text-secondary-fixed"}>

                            {currentSolution.badge}
                        </span>

                    <h2 className={"text-2xl sm:text-4xl font-extrabold font-headline text-on-surface " +
                        "dark:text-white leading-snug"}>

                        {currentSolution.title}
                    </h2>

                    <p className="text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                        {currentSolution.description}
                    </p>

                    <div className="space-y-3 pt-2">

                        {currentSolution.bullets.map((bullet, idx) => (

                            <div key={idx} className={"flex items-start gap-3 text-sm text-on-surface " +
                                "dark:text-neutral-200"}>
                                    <span className={"material-symbols-outlined text-secondary dark:text-secondary-fixed " +
                                        "shrink-0 mt-0.5"} data-icon="check_circle">

                                        check_circle
                                    </span>

                                <span>

                                        { bullet }
                                    </span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">

                        <button onClick={ handleCreateSessionNav } className={"bg-primary-container dark:bg-primary " +
                            "text-on-primary px-6 py-3.5 rounded-xl font-bold font-headline text-sm flex " +
                            "items-center gap-2 hover:bg-primary dark:hover:bg-primary/90 transition-all shadow-md " +
                            "active:scale-95"}>

                            Launch {currentSolution.badge} Session

                            <span className="material-symbols-outlined text-sm">

                                    arrow_forward
                                </span>
                        </button>
                    </div>
                </div>

                {/* Quick Metric Tiles */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-4">

                    {currentSolution.stats.map((metric, idx) => (

                        <div key={idx} className={"p-6 rounded-2xl bg-surface-container-low dark:bg-neutral-950 " +
                            "border border-outline-variant/20 dark:border-neutral-800 flex flex-col justify-center"}>

                                <span className={"text-3xl sm:text-4xl font-extrabold font-headline " +
                                    "text-primary-container dark:text-primary-fixed-dim"}>

                                    {metric.value}
                                </span>

                            <span className={"text-xs font-bold uppercase tracking-wider text-on-surface-variant " +
                                "dark:text-neutral-400 mt-1"}>

                                    {metric.label}
                            </span>

                            <span className="text-xs text-red-800">
                                <span className="material-symbols-outlined text-xs">

                                    asterisk
                                </span>

                                <span> all stats are dummy data for ui purposes</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
