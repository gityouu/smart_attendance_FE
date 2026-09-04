import React from 'react';

export const NotFoundOverlay: React.FC = () => {
    return (
        <aside aria-label="Session Not Found" className="fixed inset-0 z-50 bg-[#fcf9f8] dark:bg-neutral-950 flex flex-col items-center justify-center p-6 text-center transition-colors duration-200">
            <div className="max-w-sm w-full space-y-6">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-red-500/10 dark:bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-red-600 dark:text-red-400 text-4xl">

                        link_off
                    </span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-headline">
                        Invalid Session Link
                    </h2>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        This session link is invalid or may have been purged from the system.
                    </p>
                </div>

                <a href="" className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm">

                    Contact Support
                </a>
            </div>
        </aside>
    );
};
