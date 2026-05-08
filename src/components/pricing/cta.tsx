import React from "react";
import { useAppNavigation } from "../../utils/navigation";

export default function PricingCTA() {
    const { handleCreateSessionNav } = useAppNavigation();

    return(
        <section className="pb-20 px-6">

            <div className={"max-w-4xl mx-auto bg-primary bg-linear-to-br from-[#003d9b] to-[#0052cc] " +
                "dark:bg-on-dark-mode text-on-primary rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl " +
                "relative overflow-hidden"}>

                <div className={"absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#dae2ff_0%,transparent_35%)] " +
                    "opacity-20"}></div>

                <h2 className={"text-3xl sm:text-5xl font-extrabold font-headline leading-tight"}>

                    Test Formally in Your Next Class.
                </h2>

                <p className={"text-on-primary-container max-w-xl mx-auto text-base sm:text-lg"}>

                    No credit card needed. Generate a session right now on your projector and verify your room live.
                </p>

                <div className="pt-2">

                    <button onClick={ handleCreateSessionNav } className={"bg-white text-primary font-bold px-8 " +
                        "py-4 rounded-xl text-base shadow-lg hover:bg-surface-container-low transition-all " +
                        "active:scale-95"}>

                        Generate Free Smart QR Code
                    </button>
                </div>
            </div>
        </section>
    )
}
