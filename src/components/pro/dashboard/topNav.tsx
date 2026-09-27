import React from "react";

export default function TopNav() {
    return (
        <header className="sticky top-0 z-40 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 px-6 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

                {/* Brand & Tier Indicator */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 dark:text-blue-500 text-3xl">
                fingerprint
              </span>
                        <span className="font-headline font-extrabold text-2xl tracking-tight text-neutral-900 dark:text-white">
                Formally
              </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-xs">
              PRO
            </span>
                </div>

                {/* Network IP Node Chip & Live Broadcast Alert */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Network / IP Node Chip */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs text-neutral-600 dark:text-neutral-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono font-medium">Host Node: 172.20.10.4</span>
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Online</span>
                    </div>

                    {/* Live Broadcast Alert Chip */}
                    <a
                        href="/live-session/active"
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all hover:bg-emerald-500/20 active:scale-95"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span>Broadcasting: Room 204</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                </div>

                {/* Host Menu */}
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center gap-3 p-1.5 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer group">
                        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                            DK
                        </div>
                        <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold leading-tight text-neutral-900 dark:text-white">
                  Dr. Kwame Appiah
                </span>
                            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-tight">
                  k.appiah@institution.edu
                </span>
                        </div>
                        <span className="material-symbols-outlined text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 text-lg">
                keyboard_arrow_down
              </span>

                        {/* Host Menu Dropdown */}
                        <div className="absolute right-0 top-full mt-2 w-52 p-2 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 space-y-1 text-xs">
                            <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800 mb-1">
                                <p className="font-bold text-neutral-900 dark:text-white">Dr. Kwame Appiah</p>
                                <p className="text-[10px] text-neutral-400 truncate">k.appiah@institution.edu</p>
                            </div>
                            <button type="button" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left">
                                <span className="material-symbols-outlined text-base">manage_accounts</span>
                                <span>Security &amp; Device Pins</span>
                            </button>
                            <button type="button" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-left">
                                <span className="material-symbols-outlined text-base">dark_mode</span>
                                <span>Toggle Theme</span>
                            </button>
                            <div className="border-t border-neutral-100 dark:border-neutral-800 my-1" />
                            <button type="button" className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors text-left font-bold">
                                <span className="material-symbols-outlined text-base">logout</span>
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}
