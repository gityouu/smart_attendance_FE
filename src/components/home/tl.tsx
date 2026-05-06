import React from "react";
import { imageURL } from "../../contants/imageAssets";

export default function TL() {

    return(
        <section className="py-24 bg-surface dark:bg-neutral-950">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-12">

                        <h2 className={"text-4xl md:text-5xl font-extrabold font-manrope tracking-tight " +
                            "text-on-surface dark:text-white"}>

                            How It Works
                        </h2>

                        <div className="space-y-12 relative">

                            <div className="flex gap-6 items-start">

                                <div className={"shrink-0 w-10 h-10 bg-primary text-white rounded-full flex " +
                                    "items-center justify-center font-bold text-lg z-10"}>

                                    1
                                </div>

                                <div className="space-y-2">

                                    <h4 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                                        Admin creates a session
                                    </h4>

                                    <p className="text-on-surface-variant dark:text-neutral-400">

                                        A dynamic, short-lived QR code is generated instantly on the lecturer's
                                        screen or projector.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">

                                <div className={"shrink-0 w-10 h-10 bg-primary text-white rounded-full flex " +
                                    "items-center justify-center font-bold text-lg z-10"}>

                                    2
                                </div>

                                <div className="space-y-2">

                                    <h4 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                                        User scans via browser
                                    </h4>

                                    <p className="text-on-surface-variant dark:text-neutral-400">

                                        Students scan using their phone’s browser. No app download required,
                                        ensuring 100% adoption.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">

                                <div className={"shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex " +
                                    "items-center justify-center font-bold text-lg z-10"}>

                                    3
                                </div>

                                <div className="space-y-2">

                                    <h4 className="text-xl font-bold font-manrope text-on-surface dark:text-white">

                                        Validation &amp; Verification
                                    </h4>

                                    <p className="text-on-surface-variant dark:text-neutral-400">

                                        System validates via device fingerprinting (UUID) and a 1-time GPS check.
                                        Proxy sign-ins are instantly flagged.
                                    </p>
                                </div>
                            </div>

                            <div className={"absolute left-5 top-0 bottom-0 w-px bg-surface-dim dark:bg-neutral-800 " +
                                "z-0"}></div>
                        </div>
                    </div>

                    <div className={"bg-surface-container-low dark:bg-neutral-900 rounded-4xl p-1 overflow-hidden " +
                        "border border-transparent dark:border-neutral-800"}>

                        <img alt="timeline_image" className="w-full h-full object-cover rounded-[1.9rem]"
                             src={ imageURL.TLImage } loading={"lazy"} />
                    </div>
                </div>
            </div>
        </section>
    )
}
