import React, { useState } from "react";

//TODO: FUTURE(IN-USE) with dark mode
export default function FAQS(){
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // const faqs = [
    //     {
    //         q: 'Do students need to download an app or pay anything?',
    //         a: 'No. Students simply scan the QR code using any smartphone browser camera. It requires 0 app downloads ' +
    //             'and is 100% free for students.'
    //     },
    //     {
    //         q: 'What stops a student from taking a screenshot and sharing it?',
    //         a: 'The QR code rotates with a unique temporary cryptographic token every 30 seconds. Screenshots sent ' +
    //             'across WhatsApp or Telegram will expire before an off-campus student can submit.'
    //     },
    //     {
    //         q: 'How does the hardware anti-proxy check work?',
    //         a: 'When a student checks in, Formally binds a cryptographically generated hardware UUID to that specific ' +
    //             'session. If another student tries to submit from the same phone, the PostgresSQL backend immediately ' +
    //             'rejects it.'
    //     },
    //     {
    //         q: 'Can lecturers test without providing credit card details?',
    //         a: 'Yes. The Free tier requires zero signup, zero passwords, and zero billing information. You can launch a ' +
    //             'verified session in under 30 seconds.'
    //     }
    // ];

    return(
        <section className="py-20 px-6 max-w-4xl mx-auto w-full">
            
            <div className="text-center mb-12 space-y-2">

                <span className="text-xs font-bold uppercase tracking-widest text-primary">

                    Got Questions?
                </span>

                {/*<h2 className="text-3xl font-extrabold font-headline">Frequently Asked Questions</h2>*/}
                <h2 className="text-3xl font-extrabold font-headline">Coming Soon</h2>
            </div>

            {/*<div className="space-y-4">*/}

            {/*    {faqs.map((faq, index) => {*/}

            {/*        const isOpen = openFaq === index;*/}

            {/*        return (*/}
            {/*            <div key={index} className={"border border-outline-variant/30 rounded-2xl " +*/}
            {/*                "bg-surface-container-lowest overflow-hidden transition-all"}>*/}

            {/*                <button onClick={() => setOpenFaq(isOpen ? null : index)} className={"w-full p-5 sm:p-6 " +*/}
            {/*                    "text-left flex justify-between items-center gap-4 font-headline font-bold text-base " +*/}
            {/*                    "sm:text-lg" }>*/}

            {/*                    <span>*/}

            {/*                        {faq.q}*/}
            {/*                    </span>*/}

            {/*                    <span className={`material-symbols-outlined transition-transform duration-200 */}
            {/*                    text-on-surface-variant */}
            {/*                    ${*/}
            {/*                            isOpen ? 'rotate-180 text-primary' : ''*/}
            {/*                        }`}>*/}

            {/*                            expand_more*/}
            {/*                        </span>*/}
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
