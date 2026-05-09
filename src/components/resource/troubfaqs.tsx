import React, {useState} from "react";
import { troubleshootingFaqs } from "../../types/resource";

//TODO: FUTURE(IN-USE) with dark mode
export default function FAQS(){
    const [openTroubleshoot, setOpenTroubleshoot] = useState<number | null>(null);

    return(
        <section className="py-20 px-6 max-w-4xl mx-auto w-full">
            <div className="text-center mb-12 space-y-2">

                    <span className="text-xs font-bold uppercase tracking-widest text-primary">

                        Field Troubleshooting
                    </span>

                    {/*<h2 className="text-3xl font-extrabold font-headline">Quick Fixes for Lecture Halls</h2>*/}
                    <h2 className="text-3xl font-extrabold font-headline">Coming Soon</h2>
                </div>

                {/*<div className="space-y-4">*/}

                {/*    {troubleshootingFaqs.map((faq, index) => {*/}

                {/*        const isOpen = openTroubleshoot === index;*/}

                {/*        return (*/}
                {/*            <div key={index}*/}
                {/*                className={"border border-outline-variant/30 rounded-2xl bg-surface-container-lowest " +*/}
                {/*                    "overflow-hidden transition-all"}>*/}
                {/*                <button onClick={() => setOpenTroubleshoot(isOpen ? null : index)} className={"w-full p-5 " +*/}
                {/*                    "sm:p-6 text-left flex justify-between items-center gap-4 font-headline font-bold " +*/}
                {/*                    "text-base"}>*/}

                {/*                    <span>{faq.q}</span>*/}

                {/*                    <span className={`material-symbols-outlined transition-transform duration-200 */}
                {/*                    text-on-surface-variant */}
                {/*                    ${*/}
                {/*                            isOpen */}
                {/*                                ? 'rotate-180 text-primary' */}
                {/*                                : ''*/}
                {/*                        }`}>*/}

                {/*                                expand_more*/}
                {/*                            </span>*/}
                {/*                </button>*/}

                {/*                {isOpen && (*/}

                {/*                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-on-surface-variant leading-relaxed">*/}

                {/*                        {faq.a}*/}
                {/*                    </div>*/}
                {/*                )}*/}
                {/*            </div>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</div>*/}
        </section>
    )
}
