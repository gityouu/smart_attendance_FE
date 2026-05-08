import React from "react";
import { useAppNavigation } from "../../utils/navigation";
import { pricingGridProps, pricingTiers } from "../../types/pricing";

export default function PricingGrid({ isAnnual }: pricingGridProps)  {
    const { handleCreateSessionNav } = useAppNavigation();

    return(
        <section className="px-6 pb-24 max-w-7xl mx-auto w-full">

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">

                {pricingTiers.map((tier) => {

                    const price = typeof tier.priceMonthly === 'number'

                        ? (isAnnual
                                ? tier.priceAnnual
                                : tier.priceMonthly
                        )

                        : tier.priceMonthly;

                    return (
                        <div key={tier.id} className={`rounded-3xl p-8 flex flex-col justify-between transition-all 
                            duration-300 relative 
                            
                            ${
                            tier.popular
                                ? 'bg-surface-container-lowest dark:bg-neutral-900 border-2 border-primary ' +
                                'dark:border-blue-500 shadow-2xl scale-100 lg:-translate-y-2'

                                : 'bg-surface-container-low dark:bg-neutral-900/60 border border-outline-variant/30 ' +
                                'dark:border-neutral-800 hover:border-outline-variant/70 ' +
                                'dark:hover:border-neutral-700'
                        }`}>

                            {tier.popular && (

                                <span className={"absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary " +
                                    "dark:bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest " +
                                    "px-3.5 py-1 rounded-full shadow-sm"}>

                                        {tier.badge}
                                    </span>
                            )}

                            <div>
                                <div className="flex justify-between items-center mb-2">

                                    <h3 className="text-xl font-bold font-headline text-on-surface dark:text-white">

                                        {tier.name}
                                    </h3>

                                    {!tier.popular && tier.badge && (

                                        <span className={"text-[10px] font-bold uppercase tracking-wider " +
                                            "text-on-surface-variant dark:text-neutral-300 " +
                                            "bg-surface-container-highest dark:bg-neutral-800 px-2 py-0.5 " +
                                            "rounded-md"}>

                                                {tier.badge}
                                            </span>
                                    )}
                                </div>

                                <p className="text-xs text-on-surface-variant dark:text-neutral-400 min-h-8 mb-6">

                                    {tier.description}
                                </p>

                                <div className="mb-8 flex items-baseline gap-1">

                                    {typeof price === 'number' ? (
                                        <>

                                                <span className={"text-5xl font-extrabold font-headline text-on-surface " +
                                                    "dark:text-white"}>

                                                    ${price}
                                                </span>

                                            <span className="text-sm text-on-surface-variant dark:text-neutral-400">

                                                    / month
                                                </span>
                                        </>
                                    ) : (

                                        <span className={"text-4xl font-extrabold font-headline text-on-surface " +
                                            "dark:text-white"}>

                                                {price}
                                            </span>
                                    )}
                                </div>

                                <div className="space-y-3.5 mb-8">

                                    <p className={"text-xs font-bold uppercase tracking-wider text-on-surface " +
                                        "dark:text-neutral-200"}>

                                        What's Included:
                                    </p>

                                    {tier.features.map((feature, idx) => (

                                        <div key={idx} className={"flex items-start gap-2.5 text-sm text-on-surface " +
                                            "dark:text-neutral-300"}>

                                                <span className={"material-symbols-outlined text-secondary " +
                                                    "dark:text-secondary-fixed shrink-0 text-base mt-0.5"}>

                                                    check_circle

                                                </span>

                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={ handleCreateSessionNav } className={`w-full py-3.5 px-4 rounded-xl 
                                font-headline font-bold text-sm transition-all active:scale-95 
                                    ${
                                tier.ctaVariant === 'solid'
                                    ? 'bg-primary dark:bg-blue-600 text-white hover:bg-primary/90 ' +
                                    'dark:hover:bg-blue-500 shadow-md'

                                    : 'border border-primary dark:border-blue-500 text-primary ' +
                                    'dark:text-blue-400 hover:bg-primary/5 dark:hover:bg-blue-950/40'
                            }`}>

                                {tier.ctaText}
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
