import React, { useState } from 'react';
import { AudienceToastTabsProps, AudienceType } from "../../types/audience";


export default function AudienceToastTabs({ initialAudience = 'school', onChange }: AudienceToastTabsProps) {
    const [selected, setSelected] = useState<AudienceType>(initialAudience);

    const handleSelect = (audience: AudienceType) => {
        setSelected(audience);
        onChange?.(audience);
    };

    return (
        /* Fixed top-center notification toast wrapper */
        <aside
            aria-label="Audience selector"
            className="fixed top-1 inset-x-0 mx-auto w-fit z-50 animate-in fade-in slide-in-from-top-4 duration-300 pointer-events-auto"        >
            <div className="flex items-center gap-1 p-1 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800 shadow-lg shadow-black/5 dark:shadow-black/40">
                {/* School Tab */}
                <button
                    type="button"
                    onClick={() => handleSelect('school')}
                    className={`relative flex items-center gap-1 px-2 rounded-full text-xs font-bold transition-all duration-200 select-none ${
                        selected === 'school'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                    }`}
                >
                    <span className="material-symbols-outlined text-base">
                        school
                    </span>
                    <span>School</span>
                </button>

                {/* Divider dot */}
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />

                {/* Corporate Tab */}
                <button
                    type="button"
                    onClick={() => handleSelect('corporate')}
                    className={`relative flex items-center gap-1 px-2 rounded-full text-xs font-bold transition-all duration-200 select-none ${
                        selected === 'corporate'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                    }`}
                >
                    <span className="material-symbols-outlined text-base">
                        corporate_fare
                    </span>
                    <span>Corporate</span>
                </button>
            </div>
        </aside>
    );
}