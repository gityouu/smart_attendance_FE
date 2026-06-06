import React from 'react';
import { useAppNavigation } from '../utils/navigation';

export default function NotFoundPage() {
    const { handleCreateSessionNav } = useAppNavigation();

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body min-h-screen " +
            "flex flex-col justify-between transition-colors duration-300"}>

            {/* Main 404 Stage */}
            <main className="flex-1 flex items-center justify-center px-6 py-16">

                <div className="max-w-2xl w-full text-center space-y-8">

                    {/* Visual Badge & Expired QR / Signal Icon */}
                    <div className="relative inline-block">

                        <div className={"w-28 h-28 mx-auto rounded-3xl bg-neutral-100 dark:bg-neutral-900 border " +
                            "border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-lg " +
                            "dark:shadow-black/50"}>

                            <span className="material-symbols-outlined text-5xl text-neutral-400 dark:text-neutral-500">

                                qr_code_scanner
                            </span>
                        </div>

                        <span className={"absolute -bottom-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 " +
                            "py-0.5 rounded-full shadow-md flex items-center gap-1"}>

                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />

                            404
                        </span>
                    </div>

                    {/* Headline & Explainer */}
                    <div className="space-y-3">

                        <h1 className={"text-4xl sm:text-5xl font-extrabold font-headline tracking-tight " +
                            "text-neutral-900 dark:text-white"}>

                            Session or Page Not Found
                        </h1>
                        <p className={"text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto " +
                            "leading-relaxed"}>

                            The link you navigated to might have expired, been closed by the presenter, or does not
                            exist on our servers.
                        </p>
                    </div>

                    {/* Quick Diagnostic Card */}
                    <div className={"p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border " +
                        "border-neutral-200/80 dark:border-neutral-800 text-left max-w-md mx-auto space-y-2"}>

                        <div className={"flex items-center gap-2 text-xs font-bold uppercase tracking-wider " +
                            "text-neutral-600 dark:text-neutral-300"}>

                            <span className="material-symbols-outlined text-base text-blue-600 dark:text-blue-400">

                                help
                            </span>

                            Common Reasons
                        </div>

                        <ul className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1 list-disc list-inside">

                            <li>The QR token was older than 30 seconds (expired token).</li>

                            <li>The presenter ended the live attendance session.</li>

                            <li>A typo occurred in the room or check-in URL.</li>
                        </ul>
                    </div>

                    {/* Navigation CTAs */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">

                        <a href="/" className={"w-full sm:w-auto px-6 py-3 rounded-xl border border-neutral-200 " +
                            "dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 " +
                            "dark:hover:bg-neutral-900 text-xs font-bold transition-all shadow-xs"}>

                            Return to Homepage
                        </a>

                        <button onClick={ handleCreateSessionNav } className={"w-full sm:w-auto px-6 py-3 bg-blue-600 " +
                            "hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-md " +
                            "active:scale-95 flex items-center justify-center gap-1.5" }>

                            <span>Launch New Session</span>

                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

