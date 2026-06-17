import React from "react";

export default function CheckInHeader() {
    return (
        <header className="fixed top-0 w-full z-50 bg-[#fcf9f8] dark:bg-stone-950">
            <div className="flex items-center justify-between px-6 h-16 w-full max-w-md mx-auto">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0052CC] dark:text-[#4d94ff] text-2xl" data-icon="fingerprint">
                        fingerprint
                    </span>
                    <h1 className="font-['Manrope'] font-extrabold tracking-tighter text-xl text-[#1c1b1b] dark:text-white">
                        Formally
                    </h1>
                </div>
                <button className="p-2 rounded-full hover:bg-[#f6f3f2] dark:hover:bg-stone-800 transition-colors active:scale-95 duration-200">
                    <span className="material-symbols-outlined text-on-surface-variant" data-icon="help_outline">
                        help_outline
                    </span>
                </button>
            </div>
        </header>
    )
}