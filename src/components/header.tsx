import React from "react";
import { NavLink } from "react-router-dom";
import { useAppNavigation } from "../utils/navigation";
import { useTheme } from "../context/theme";

export default function Header() {
    const { handleCreateSessionNav } = useAppNavigation();
    const { isDark, toggleDarkMode } = useTheme();

    //function to switch styles based on whether the link is active
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-[#0052CC] dark:text-[#4d8eff] font-semibold border-b-2 border-[#0052CC] pb-1 transition-all"
            : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 " +
            "transition-colors pb-1";

    return (
        <nav className="w-full top-0 sticky z-50 bg-[#fcf9f8] dark:bg-neutral-950 border-b border-outline-variant/20">

            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">

                <NavLink to="/" className="flex items-center gap-2">

                    <span className="material-symbols-outlined text-[#0052CC] dark:text-[#4d94ff] text-2xl"
                        data-icon="fingerprint">

                        fingerprint
                    </span>

                    <h1 className={"font-['Manrope'] font-extrabold tracking-tighter text-xl text-[#1c1b1b] " +
                        "dark:text-white"}>

                        Formally
                    </h1>
                </NavLink>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                    <NavLink to="/" end className={navLinkClasses}>

                        Home
                    </NavLink>

                    <NavLink to="/solutions" className={navLinkClasses}>

                        Solutions
                    </NavLink>

                    <NavLink to="/pricing" className={navLinkClasses}>

                        Pricing
                    </NavLink>

                    <NavLink to="/resources" className={navLinkClasses}>

                        Resources
                    </NavLink>
                </div>

                <div className="flex items-center gap-3">
                    {/* Dark Mode Toggle Button */}
                    <button onClick={toggleDarkMode} aria-label="Toggle theme"
                        className={"p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/60 " +
                            "dark:hover:bg-neutral-800 transition-colors flex items-center justify-center cursor-pointer"}>

                        <span className="material-symbols-outlined text-xl">

                            {isDark ? "light_mode" : "dark_mode"}
                        </span>
                    </button>

                    <button onClick={handleCreateSessionNav} className={"hidden sm:block transition-all bg-primary " +
                        "text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 active:scale-95"}>
                        Create Session
                    </button>
                </div>
            </div>
        </nav>
    );
}
