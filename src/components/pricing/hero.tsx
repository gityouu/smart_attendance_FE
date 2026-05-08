import React from "react";
import { pricingHeroProps } from "../../types/pricing";

export default function PricingHero({ isAnnual, setIsAnnual }: pricingHeroProps) {

    return (
        <header className="pt-16 pb-14 px-6 text-center max-w-4xl mx-auto space-y-6">

            <div className={"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container " +
                "dark:bg-secondary/20 text-on-secondary-container dark:text-secondary-fixed text-xs font-bold " +
                "tracking-widest uppercase"}>

                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>

                Simple, Transparent Pricing
            </div>

            <h1 className={"text-4xl sm:text-6xl font-extrabold font-headline tracking-tight text-on-surface " +
                "dark:text-white leading-[1.15]"}>

                Zero Hardware Upfront. <br />

                <span className="text-primary dark:text-primary-fixed-dim">

                        Fraction of the Cost.
                    </span>
            </h1>

            <p className={"text-lg sm:text-xl text-on-surface-variant dark:text-neutral-400 max-w-2xl mx-auto " +
                "leading-relaxed"}>

                Pick the tier that fits your class. Run ad-hoc sessions totally free or upgrade your department for
                deep roster analytics.
            </p>

            {/* Billing Toggle */}
            <div className="pt-4 flex items-center justify-center gap-4">

                    <span className={`text-sm font-bold transition-colors 
                    
                        ${
                        !isAnnual
                            ? 'text-on-surface dark:text-white'
                            : 'text-on-surface-variant dark:text-neutral-500'
                    }`}>

                        Monthly
                    </span>

                <button onClick={() => setIsAnnual(!isAnnual)} className={"w-14 h-9 bg-surface-container-highest " +
                    "dark:bg-neutral-800 rounded-full p-1 transition-colors relative focus:outline-none border " +
                    "border-transparent dark:border-neutral-700"}>

                    <div className={`w-6 h-6 bg-primary dark:bg-blue-600 rounded-full shadow-sm 
                        transition-transform duration-300 
                            ${
                        isAnnual
                            ? 'translate-x-3'
                            : 'translate-x-0'
                    }`}/>
                </button>

                <span className={`text-sm font-bold flex items-center gap-1.5 transition-colors 
                        ${
                    isAnnual
                        ? 'text-on-surface dark:text-white'
                        : 'text-on-surface-variant dark:text-neutral-500'
                }`}>

                        Annual

                        <span className={"text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-secondary-container " +
                            "dark:bg-secondary/20 text-on-secondary-container dark:text-secondary-fixed"}>

                            Save 20%
                        </span>
                    </span>
            </div>
        </header>
    )
}
