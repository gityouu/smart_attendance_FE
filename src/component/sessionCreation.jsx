import React from 'react';

export default function SessionCreation() {
    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col">
            {/*<!-- Main Content*/}
            <main className="grow flex items-center justify-center p-6 md:p-12 lg:p-20">
                <div
                    className="w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-[0_40px_100px_-20px_rgba(28,27,27,0.06)] overflow-hidden flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        {/*<!-- Left Side: Setup Form */}
                        <section className="flex-1 p-8 lg:p-12 bg-surface-container-lowest">
                            <header className="mb-10">
                                <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">Launch a New
                                    Session</h1>
                                <p className="text-on-surface-variant text-sm font-medium">No account needed. Fill in the
                                    details and start tracking.</p>
                            </header>
                            <form className="space-y-6">
                                {/*<!-- Course Name*/}
                                <div className="space-y-1.5">
                                    <label
                                        className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Course
                                        Name / Code</label>
                                    <input
                                        className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline transition-all form-input-shadow"
                                        placeholder="e.g. CS101 - Introduction to Algorithms" type="text"/>
                                </div>
                                {/*<!-- Lecturer Email */}
                                <div className="space-y-1.5">
                                    <div className="flex items-center space-x-2">
                                        <label
                                            className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Lecturer
                                            Email</label>
                                        <div className="group relative cursor-help">
                                            <span className="material-symbols-outlined text-base text-primary">info</span>
                                            <div
                                                className="absolute bottom-full left-full -translate-x-1/2 mb-2 w-48 p-2 bg-inverse-surface text-inverse-on-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                We’ll email your final attendance report here.
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline transition-all form-input-shadow"
                                        placeholder="lecturer@university.edu" type="email"/>
                                </div>
                                {/*<!-- Session Duration */}
                                <div className="space-y-1.5">
                                    <label
                                        className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Session
                                        Duration</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        <button
                                            className="py-2.5 px-4 bg-primary text-on-primary rounded-lg text-sm font-semibold transition-all shadow-sm"
                                            type="button">10m
                                        </button>
                                        <button
                                            className="py-2.5 px-4 bg-surface-container-highest text-on-surface rounded-lg text-sm font-semibold hover:bg-surface-variant transition-all"
                                            type="button">20m
                                        </button>
                                        <button
                                            className="py-2.5 px-4 bg-surface-container-highest text-on-surface rounded-lg text-sm font-semibold hover:bg-surface-variant transition-all"
                                            type="button">30m
                                        </button>
                                    </div>
                                </div>
                                {/*<!-- Security Toggles */}
                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span
                                                className="text-sm font-semibold text-on-surface">Enable GPS Verification</span>
                                            <span className="text-xs text-on-surface-variant">Check if students are in the className={} room area</span>
                                        </div>
                                        <button
                                            className="w-11 h-6 bg-secondary rounded-full relative transition-colors duration-200 focus:outline-none"
                                            type="button">
                                            <span
                                                className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-on-surface">Strict Device ID (Anti-Proxy)</span>
                                            <span className="text-xs text-on-surface-variant">One submission per physical hardware device</span>
                                        </div>
                                        <button
                                            className="w-11 h-6 bg-surface-container-highest rounded-full relative transition-colors duration-200 focus:outline-none"
                                            type="button">
                                            <span
                                                className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full shadow-sm"></span>
                                        </button>
                                    </div>
                                </div>
                                {/*<!-- CTA */}
                                <div className="pt-6">
                                    <button
                                        className="w-full py-4 bg-primary bg-linear-to-br from-primary to-primary-container text-white font-bold text-lg rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
                                        Generate Smart QR Code
                                    </button>
                                </div>
                            </form>
                        </section>
                        {/*<!-- Right Side: Live Preview */}
                        <section
                            className="flex-1 bg-surface-container-low p-8 lg:p-12 flex flex-col items-center justify-center relative border-l border-surface-container">
                            <div className="text-center space-y-8 opacity-40">
                                <div className="relative group">
                                    <div
                                        className="w-64 h-64 bg-surface-container-lowest rounded-2xl p-6 flex items-center justify-center shadow-sm relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-linear-to-br from-transparent to-surface-container opacity-50"></div>
                                        {/*<!-- Ghosted QR Placeholder */}
                                        <div className="grid grid-cols-4 gap-2 w-full h-full p-2">
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                            <div className="bg-surface-dim rounded-sm"></div>
                                        </div>
                                    </div>
                                    {/*<!-- Waiting status */}
                                    <div className="mt-6 flex flex-col items-center">
                                        <div className="flex items-center space-x-2 text-on-surface font-semibold">
                                            <span className="w-2 h-2 bg-outline rounded-full animate-pulse"></span>
                                            <span>Waiting for Setup</span>
                                        </div>
                                        <p className="text-xs text-on-surface-variant mt-2 max-w-50">Complete the form
                                            on the left to preview your live session QR code.</p>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Decorative Ledger Detail*/}
                            <div className="absolute top-0 right-0 p-8">
                                <div
                                    className="text-[80px] font-black text-surface-container-high leading-none select-none">01
                                </div>
                            </div>
                        </section>
                    </div>
                    {/*<!-- Bottom of Card: Feature Highlights */}
                    <footer
                        className="bg-surface-container px-8 py-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 border-t border-surface-variant">
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">lock_open</span>
                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">No Password Required</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                            <span
                                className="text-xs font-bold text-on-surface uppercase tracking-widest">Encrypted Data</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">send</span>
                            <span
                                className="text-xs font-bold text-on-surface uppercase tracking-widest">Auto-Email Report</span>
                        </div>
                    </footer>
                </div>
            </main>
            {/*<!-- Global Footer */}
            <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div
                    className="flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-4 md:mb-0">Formally</div>
                    <div className="flex space-x-8">
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors"
                           href="#">Support</a>
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors"
                           href="#">Privacy Policy</a>
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors"
                           href="#">Terms of Service</a>
                    </div>
                    <div
                        className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-4 md:mt-0">
                        © 2026 Formally SaaS. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}