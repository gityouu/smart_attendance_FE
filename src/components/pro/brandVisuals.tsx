import React from "react";
import { imageURL } from "../../contants/imageAssets";

export default function BrandVisuals(){
    return(
        <section className="hidden lg:flex lg:w-1/2 relative bg-surface-container-low dark:bg-neutral-900 p-12 flex-col justify-between overflow-hidden border-r border-outline-variant/20 dark:border-neutral-800">
            {/* Radial Backdrop Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#0052cc15,transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_30%,#003d9b25,transparent_70%)] pointer-events-none" />

            {/* Top Logo */}
            <div className="relative z-10 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary dark:text-blue-500 text-3xl" data-icon="fingerprint">
                        fingerprint
                    </span>
                <span className="font-headline font-extrabold text-2xl tracking-tight text-neutral-900 dark:text-white">
                        Formally
                    </span>
                <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white">
                        PRO
                    </span>
            </div>

            {/* Center Image / Feature Card */}
            <div className="relative z-10 my-auto max-w-lg mx-auto w-full space-y-6">
                <div className="rounded-3xl overflow-hidden border border-outline-variant/30 dark:border-neutral-800 shadow-2xl dark:shadow-black/60 bg-neutral-900 aspect-16/10 relative group">
                    <img
                        src={imageURL.TLImage}
                        alt="Formally Pro Analytics Dashboard"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                                Department Analytics
                            </span>
                        <h3 className="text-xl font-bold font-headline text-white mt-1">
                            Real-Time Presence & Fraud Audit Trail
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md border border-outline-variant/20 dark:border-neutral-800">
                            <span className="material-symbols-outlined text-primary dark:text-blue-400 text-xl mb-1">
                                group
                            </span>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                            Up to 600 Attendees
                        </h4>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                            Scaled for large lecture halls and corporate seminars.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md border border-outline-variant/20 dark:border-neutral-800">
                            <span className="material-symbols-outlined text-emerald-500 text-xl mb-1">
                                sync_saved_locally
                            </span>
                        <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                            Roster History
                        </h4>
                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                            Persistent session archives and gradebook exports.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Trust Note */}
            <div className="relative z-10 flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <span className="material-symbols-outlined text-base text-blue-600 dark:text-blue-400">
                        verified_user
                    </span>
                <span>End-to-end encrypted session records & institutional single-tenant security.</span>
            </div>
        </section>
    )
}
