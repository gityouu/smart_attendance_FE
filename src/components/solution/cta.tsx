import React from "react";
import { useAppNavigation } from "../../utils/navigation";

export default function SolutionCTA() {
    const { handleCreateSessionNav } = useAppNavigation();

    return (
        <section className="py-20 px-6">

            <div className={"max-w-4xl mx-auto bg-primary bg-linear-to-br from-[#003d9b] to-[#0052cc] " +
                "dark:bg-on-dark-mode text-on-primary rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl " +
                "relative overflow-hidden"}>

                <div className={"absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#dae2ff_0%,transparent_50%)] " +
                    "opacity-20"}></div>

                <span className="material-symbols-outlined text-6xl opacity-30 mx-auto block" data-icon="lock_open">

                        verified_user
                    </span>

                <h2 className="text-3xl sm:text-5xl font-extrabold font-headline leading-tight text-white">

                    Start Securing Attendance Today.
                </h2>

                <p className="text-on-primary-container max-w-xl mx-auto text-base sm:text-lg">

                    No login credentials, no software installation, no credit cards. Launch a session in 30 seconds
                    and experience fraud-free verification.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">

                    <button onClick={ handleCreateSessionNav } className={"w-full sm:w-auto bg-white text-primary " +
                        "font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:bg-surface-container-low " +
                        "transition-all active:scale-95"}>

                        Launch a Session Now
                    </button>
                </div>
            </div>
        </section>
    )
}
