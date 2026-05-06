import React from "react";

export default function Hero() {

    return(
        <section className="relative pt-16 pb-24 px-6 overflow-hidden">

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">

                    <div className={"inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed " +
                        "dark:bg-primary/20 text-on-primary-fixed dark:text-primary-fixed text-xs font-bold " +
                        "tracking-widest uppercase"}>

                        New: V3 Dynamic QR Validation
                    </div>

                    <h1 className={"text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface " +
                        "dark:text-white leading-[1.1]"}>

                        Eliminate Proxy Attendance.

                        <span className="text-primary-container dark:text-primary-fixed-dim">

                                Keep It Simple.
                            </span>
                    </h1>

                    <p className={"text-xl text-on-surface-variant dark:text-neutral-400 max-w-xl font-medium " +
                        "leading-relaxed"}>

                        The easiest way to track real presence using rotating QR codes and geolocation.
                        No complex hardware required.
                    </p>
                </div>

                <div className={"relative bg-surface-container-low dark:bg-neutral-900 rounded-3xl p-4 md:p-8 " +
                    "aspect-square flex items-center justify-center overflow-hidden border border-transparent " +
                    "dark:border-neutral-800"}>

                    <div className={"absolute inset-0 opacity-40 " +
                        "bg-[radial-gradient(circle_at_30%_30%,#dae2ff_0%,transparent_70%)] " +
                        "dark:bg-[radial-gradient(circle_at_30%_30%,#003d9b_0%,transparent_70%)]"}></div>

                    {/* Editorial Image/Mockup */}
                    <div className={"relative z-10 w-full h-full rounded-2xl bg-white dark:bg-neutral-950 " +
                        "shadow-2xl flex flex-col overflow-hidden border border-transparent dark:border-neutral-800"}>

                        <div className={"h-12 bg-surface-container-high dark:bg-neutral-900 flex items-center px-4 " +
                            "gap-2 border-b border-transparent dark:border-neutral-800"}>

                            <div className="w-3 h-3 rounded-full bg-error/40"></div>

                            <div className="w-3 h-3 rounded-full bg-secondary/40"></div>

                            <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col items-center justify-center text-center space-y-6">

                            <div className={"w-48 h-48 bg-surface-container-low dark:bg-neutral-900 rounded-xl p-4 " +
                                "border-2 border-dashed border-outline-variant dark:border-neutral-700 flex " +
                                "items-center justify-center relative"}>

                                    <span className={"material-symbols-outlined text-6xl text-primary " +
                                        "dark:text-primary-fixed-dim"} data-icon="qr_code_2">

                                        qr_code_2
                                    </span>

                                <div className={"absolute -bottom-2 -right-2 bg-secondary text-white p-2 " +
                                    "rounded-full flex items-center justify-center shadow-lg"}>

                                        <span className="material-symbols-outlined text-sm" data-icon="check_circle">

                                            check_circle
                                        </span>
                                </div>
                            </div>

                            <div className="space-y-2">

                                <p className={"text-xs uppercase font-bold tracking-widest text-on-surface-variant " +
                                    "dark:text-neutral-400"}>

                                    Live QRCODE
                                </p>

                                <h3 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                                    Live Attendance in Progress
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
