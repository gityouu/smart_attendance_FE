import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    isDark: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState<boolean>(() => {
        return (
            localStorage.getItem("formally_theme") === "dark" ||
            (!localStorage.getItem("formally_theme") &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        );
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("formally_theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("formally_theme", "light");
        }
    }, [isDark]);

    const toggleDarkMode = () => setIsDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
