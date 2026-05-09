import React, { useState } from "react";
import { categoryFilter, resourcesList, articlesProps } from "../../types/resource";

export default function Articles({ activeFilter, setActiveFilter }: articlesProps)  {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredResources = resourcesList.filter((item) => {
        const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="px-6 py-12 max-w-7xl mx-auto w-full">

            {/* Sticky Search Bar & Filter Chips */}
            <div className={"sticky top-20 z-40 bg-surface/95 dark:bg-neutral-950/95 backdrop-blur-md py-4 mb-8 " +
                "border-b border-outline-variant/20 dark:border-neutral-800 transition-all"}>

                {/* Search Bar */}
                <div className="max-w-xl mx-auto">

                    <div className="relative flex items-center">

                            <span className={"material-symbols-outlined absolute left-4 text-on-surface-variant " +
                                "dark:text-neutral-400 text-xl"}>

                                search
                            </span>

                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search guides, permissions, LMS exports..."
                            className={"w-full pl-12 pr-4 py-3.5 bg-surface-container-low dark:bg-neutral-900 " +
                                "border border-outline-variant/40 dark:border-neutral-800 rounded-2xl " +
                                "text-on-surface dark:text-neutral-100 placeholder:text-outline " +
                                "dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 " +
                                "focus:ring-primary dark:focus:ring-blue-500 transition-all text-sm shadow-sm"}
                        />
                    </div>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap justify-center gap-2 pt-3">

                    {(['all', 'toolkits', 'students', 'security', 'integrations'] as categoryFilter[])
                        .map((filter) => {
                            const labels: Record<categoryFilter, string> =
                                {
                                    all: 'All Resources',
                                    toolkits: 'Educator Toolkits',
                                    students: 'Student Guides',
                                    security: 'Security & Privacy',
                                    integrations: 'LMS & Exports'
                                };

                            const isActive = activeFilter === filter;

                            return (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-2 rounded-xl text-xs font-headline font-bold transition-all 
                                    ${
                                        isActive
                                            ? 'bg-primary dark:bg-blue-600 text-white shadow-sm'
                                            : 'bg-surface-container-low dark:bg-neutral-900 text-on-surface-variant ' +
                                            'dark:text-neutral-400 hover:bg-surface-container-high ' +
                                            'dark:hover:bg-neutral-800 hover:text-on-surface dark:hover:text-white'
                                    }`}>

                                    {labels[filter]}
                                </button>
                            );
                        })}
                </div>
            </div>

            {/* Articles & Guides Grid Header & Items */}
            <div className="flex justify-between items-center mb-8">
                <div>

                        <span className={"text-xs font-bold uppercase tracking-widest text-primary " +
                            "dark:text-primary-fixed-dim"}>

                            Articles &amp; Playbooks
                        </span>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-headline text-on-surface dark:text-white">

                        Knowledge Base
                    </h2>
                </div>

                <span className="text-xs font-bold text-on-surface-variant dark:text-neutral-400">

                        {filteredResources.length} {filteredResources.length === 1 ? 'Resource' : 'Resources'}
                    </span>
            </div>

            {filteredResources.length === 0 ? (

                <div className={"p-12 text-center rounded-3xl bg-surface-container-low dark:bg-neutral-900 " +
                    "border border-outline-variant/20 dark:border-neutral-800"}>

                    <p className="text-on-surface-variant dark:text-neutral-400 text-sm font-medium">

                        No resources match your search criteria.
                    </p>
                </div>
            ) : (

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {filteredResources.map((item) => (

                        <div key={item.id} className={"bg-surface-container-lowest dark:bg-neutral-900 rounded-3xl " +
                            "p-6 border border-outline-variant/30 dark:border-neutral-800 " +
                            "hover:border-outline-variant/80 dark:hover:border-neutral-700 transition-all flex " +
                            "flex-col justify-between group shadow-sm hover:shadow-md"}>

                            <div>
                                <div className="flex justify-between items-center mb-4">

                                        <span className={"text-[10px] font-bold uppercase tracking-wider text-primary " +
                                            "dark:text-primary-fixed bg-primary/10 dark:bg-primary/20 px-2.5 py-1 " +
                                            "rounded-md"}>

                                            {item.badge}
                                        </span>

                                    <span className="text-xs text-on-surface-variant dark:text-neutral-400">

                                            {item.readTime}
                                        </span>
                                </div>

                                <h3 className={"text-base font-bold font-headline group-hover:text-primary " +
                                    "dark:group-hover:text-blue-400 transition-colors leading-snug mb-3 " +
                                    "text-on-surface dark:text-white"}>

                                    {item.title}
                                </h3>

                                <p className={"text-xs text-on-surface-variant dark:text-neutral-400 " +
                                    "leading-relaxed line-clamp-3"}>

                                    {item.description}
                                </p>
                            </div>

                            <div className={"pt-6 mt-6 border-t border-outline-variant/20 dark:border-neutral-800 " +
                                "flex items-center justify-between text-xs font-bold text-primary " +
                                "dark:text-primary-fixed"}>

                                <span>Read Article</span>

                                <span className={"material-symbols-outlined text-sm group-hover:translate-x-1 " +
                                    "transition-transform"}>

                                        arrow_forward
                                    </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    )
}
