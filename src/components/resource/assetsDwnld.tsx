import React from "react";
import { downloadableAssets } from "../../types/resource";

export default function AssetsDownload() {

    return (
        <div className="max-w-5xl mx-auto">

            <div className="text-center mb-12 space-y-2">

                <span className="text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-fixed-dim">

                    Classroom Assets
                </span>

                <h2 className="text-3xl font-extrabold font-headline text-on-surface dark:text-white">

                    Ready-to-Use Downloads
                </h2>

                <p className="text-sm text-on-surface-variant dark:text-neutral-400 max-w-xl mx-auto">

                    Grab project-ready slide decks and pre-formatted spreadsheet templates to get up and running
                    instantly.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

                {downloadableAssets.map((asset, idx) => (

                    <div key={idx} className={"bg-surface-container-lowest dark:bg-neutral-900 rounded-2xl p-6 border " +
                        "border-outline-variant/30 dark:border-neutral-800 shadow-sm flex flex-col justify-between " +
                        "transition-colors"}>

                        <div className="space-y-3">

                            <div className="flex items-center justify-between">

                                <span className={"text-[11px] font-extrabold px-2.5 py-1 rounded-md " +
                                    "bg-secondary-container dark:bg-secondary/20 text-on-secondary-container " +
                                    "dark:text-secondary-fixed"}>

                                    {asset.type}
                                </span>

                                <span className="text-xs text-on-surface-variant dark:text-neutral-400">

                                    {asset.size}
                                </span>
                            </div>

                            <h4 className={"text-sm font-bold font-headline leading-snug text-on-surface " +
                                "dark:text-white"}>

                                {asset.title}
                            </h4>

                            <p className="text-xs text-on-surface-variant dark:text-neutral-400 leading-relaxed">

                                {asset.desc}
                            </p>
                        </div>

                        <button className={"mt-6 w-full py-2.5 px-3 rounded-xl border border-primary " +
                            "dark:border-blue-500 text-primary dark:text-blue-400 font-headline font-bold text-xs " +
                            "flex items-center justify-center gap-1.5 hover:bg-primary dark:hover:bg-blue-600 " +
                            "hover:text-white dark:hover:text-white transition-colors"}>

                            <span className="material-symbols-outlined text-base">download</span>

                            Download File
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
