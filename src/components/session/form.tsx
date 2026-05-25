import React from "react";

export default function Form() {
    return(
        <section className="flex-1 p-4 lg:p-6 bg-surface-container-lowest dark:bg-neutral-900">
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-on-surface dark:text-white tracking-tight mb-2">
                    New Session
                </h1>
                <p className="text-on-surface-variant dark:text-neutral-400 text-sm font-medium">
                    No account needed. Fill in the details and start tracking.
                </p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                        Course Name / Code / Meeting Title
                    </label>
                    <input
                        className="w-full px-4 py-3 bg-surface-container-low dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 rounded-lg text-on-surface dark:text-white placeholder:text-outline dark:placeholder:text-neutral-500 transition-all form-input-shadow"
                        placeholder="e.g. CS101 - Introduction to Algorithms"
                        type="text"
                    />
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                        <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                            Email
                        </label>
                        <div className="group relative cursor-help">
                            <span className="material-symbols-outlined text-base text-primary dark:text-blue-400">info</span>
                            <div className="absolute bottom-full left-full -translate-x-[10%] mb-2 w-48 p-2 bg-inverse-surface dark:bg-neutral-800 text-inverse-on-surface dark:text-neutral-200 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-20">
                                We’ll email your final attendance report here.
                            </div>
                        </div>
                    </div>
                    <input
                        className="w-full px-4 py-3 bg-surface-container-low dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 rounded-lg text-on-surface dark:text-white placeholder:text-outline dark:placeholder:text-neutral-500 transition-all form-input-shadow"
                        placeholder="lecturer@university.edu"
                        type="email"
                    />
                </div>

                <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-on-surface-variant dark:text-neutral-300 tracking-wider">
                        Session Duration
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        <button
                            type="button"
                            className="py-2.5 px-4 rounded-lg text-sm font-semibold transition-all bg-primary dark:bg-blue-600 text-on-primary text-white"
                        >
                            5m
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-4 rounded-lg text-sm font-semibold transition-all bg-surface-container-highest dark:bg-neutral-800 text-on-surface dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        >
                            10m
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-4 rounded-lg text-sm font-semibold transition-all bg-surface-container-highest dark:bg-neutral-800 text-on-surface dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                        >
                            15m
                        </button>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-semibold block text-on-surface dark:text-white">GPS Verification</span>
                            <span className="text-xs text-on-surface-variant dark:text-neutral-400">Lock to classroom area</span>
                        </div>
                        <button
                            type="button"
                            className="w-11 h-6 rounded-full relative transition-colors bg-secondary dark:bg-blue-600"
                        >
                            <span className="absolute top-1 right-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all"></span>
                        </button>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-on-surface dark:text-white">Strict Device ID (Anti-Proxy)</span>
                            <span className="text-xs text-on-surface-variant dark:text-neutral-400">One submission per physical hardware device</span>
                        </div>
                        <button
                            type="button"
                            className="w-11 h-6 rounded-full relative transition-colors duration-200 bg-surface-container-highest dark:bg-neutral-700"
                        >
                            <span className="absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all"></span>
                        </button>
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="button"
                        className="w-full py-4 bg-primary dark:bg-blue-600 hover:bg-primary/90 dark:hover:bg-blue-500 text-white font-bold rounded-lg transition-colors"
                    >
                        Generate Smart QR Code
                    </button>
                </div>
            </form>
        </section>
    )
}
