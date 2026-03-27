import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();

    const handleCreateSession = () => {
        navigate('/session-creation');
    }

    return (
        <div className="bg-surface text-on-surface">
            {/*<!-- TopNavBar*/}
            <nav className="w-full top-0 sticky z-50 bg-[#fcf9f8] dark:bg-neutral-950">
                <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
                    <div
                        className="text-2xl font-extrabold font-manrope text-neutral-900 dark:text-neutral-50 tracking-tighter">Formally
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a className="text-[#0052CC] dark:text-[#4d8eff] font-semibold border-b-2 border-[#0052CC] pb-1"
                           href="#">Product</a>
                        <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                           href="#">Solutions</a>
                        <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                           href="#">Pricing</a>
                        <a className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                           href="#">Resources</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <button onClick={handleCreateSession}
                            className="hidden sm:block transition-all bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm">
                            Create Session
                        </button>
                    </div>
                </div>
            </nav>
            {/*<!-- Hero Section*/}
            <section className="relative pt-16 pb-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div
                            className="inline-flex items-center px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold tracking-widest uppercase">
                            New: V3 Dynamic QR Validation
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1]">
                            Eliminate Proxy Attendance. <span className="text-primary-container">Keep It Simple.</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed">
                            The easiest way to track real presence using rotating QR codes and geolocation. No complex
                            hardware required.
                        </p>
                    </div>
                    <div
                        className="relative bg-surface-container-low rounded-3xl p-4 md:p-8 aspect-square flex items-center justify-center overflow-hidden">
                        <div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#dae2ff_0%,transparent_70%)] opacity-40"></div>
                        {/*<!-- Editorial Image/Mockup Replacement*/}
                        <div
                            className="relative z-10 w-full h-full rounded-2xl bg-white shadow-2xl flex flex-col overflow-hidden">
                            <div className="h-12 bg-surface-container-high flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                                <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
                                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col items-center justify-center text-center space-y-6">
                                <div
                                    className="w-48 h-48 bg-surface-container-low rounded-xl p-4 border-2 border-dashed border-outline-variant flex items-center justify-center relative">
                                    <span className="material-symbols-outlined text-6xl text-primary"
                                          data-icon="qr_code_2">qr_code_2</span>
                                    <div
                                        className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="material-symbols-outlined text-sm"
                                              data-icon="check_circle">check_circle</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant">Live
                                        Dashboard</p>
                                    <h3 className="text-xl font-bold font-manrope">Verification in Progress</h3>
                                    <div className="flex gap-2 justify-center">
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                                            <img alt="" className="w-full h-full object-cover"
                                                 data-alt="close up headshot of a student smiling in a className={} room setting"
                                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNB565_OjBmZforrLYOVuSjKHIKySolncqDL4ViB4yFbC5KxIb27zA9BeOAvfxOx6ybGWTDedYNoxCvX3j1Cl1uX31bOkPjmN_eseBjkf6frCjfPbx56Iz8tsxpQCaHWqUHJK-WXOA20AjJ5N1opw90eaADiD3lK56M4FPKnpBwIej1NtLbvItbAKBL1BEchyl3_VWv8oYTyy1talx2wJ9vXUHj5iaQipMy70yqvW-8JzFJyGpov17NmrnPrOqmFm5hQtoHckemP8b"/>
                                        </div>
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                                            <img alt="" className="w-full h-full object-cover"
                                                 data-alt="professional portrait of a young man with a neutral expression in natural daylight"
                                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFFR1o_TYtB8rb0Ug-HxcQuTVURgi0UtulTrFMLrqDC0oITbJ1rPoWXIYcniOnb9VDH8s8fjZezX593u1i5u22um0wJdHEiAaU-04oxS8grb5nSZ5qZl2-OA5_rsDWfeFGvhH75P6Bb9sD8FmmjF9uRu0ITQ5PZx_Cyjn2EZJoSDBMqY3n_XKfSr75pouS8XHObyOvHiIXZWM71D5T9EQ1nJSUOHhUmyMSFkGM0H_eAFr_CHgjk30vyuQt39ooLp4iryoPJabfHdYH"/>
                                        </div>
                                        <div
                                            className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
                                            <img alt="" className="w-full h-full object-cover"
                                                 data-alt="modern headshot of a woman with curly hair looking confident and professional"
                                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVL-8r9smZ0mbYqVB9L1qI3cYBz5WGr1MVqLLFWWfozBv8ICE-2yCLwr3bGNnBzzsNYH003EXmfObKk98mKKZQkbiiyeb98P2Nb_k6aqJaJTSZv2j6WApHOJM8e8uZaB5Fo67DJYG0L_AVxwm_ha7z30vV7cdYzNdmO-9kMhmppHUM3Xq8HRzF2nZUDeC8G4DFKhJgl_E0NOw8pCISNUXvCPPdUO5gOOHPWnYDJQE7bVHzk9a7ju4seS5vdd6UpZmYi49361KNbuA1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Problem Section */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-extrabold font-manrope tracking-tight">Why Traditional
                            Attendance Fails</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Manual systems and outdated
                            hardware are the biggest leaks in institutional productivity.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/*<!-- Card 1*/}
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl space-y-6 flex flex-col transition-all hover:-translate-y-2">
                            <div
                                className="w-14 h-14 bg-error-container/20 rounded-full flex items-center justify-center text-error">
                                <span className="material-symbols-outlined text-3xl" data-icon="edit_note">edit_note</span>
                            </div>
                            <h3 className="text-2xl font-bold font-manrope">The 'Sign-for-a-Friend' Loophole</h3>
                            <p className="text-on-surface-variant leading-relaxed">Proxy attendance costs institutions
                                thousands in misallocated resources and diluted academic integrity.</p>
                        </div>
                        {/*<!-- Card 2*/}
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl space-y-6 flex flex-col transition-all hover:-translate-y-2">
                            <div
                                className="w-14 h-14 bg-tertiary-fixed/20 rounded-full flex items-center justify-center text-tertiary">
                                <span className="material-symbols-outlined text-3xl"
                                      data-icon="settings_input_component">settings_input_component</span>
                            </div>
                            <h3 className="text-2xl font-bold font-manrope">Hardware Costs &amp; Maintenance</h3>
                            <p className="text-on-surface-variant leading-relaxed">Biometric scanners and swipe cards are
                                expensive to install, prone to breakdown, and difficult to scale.</p>
                        </div>
                        {/*<!-- Card 3 */}
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl space-y-6 flex flex-col transition-all hover:-translate-y-2">
                            <div
                                className="w-14 h-14 bg-primary-fixed/20 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl" data-icon="inventory">inventory</span>
                            </div>
                            <h3 className="text-2xl font-bold font-manrope">Administrative Data Entry</h3>
                            <p className="text-on-surface-variant leading-relaxed">Staff spend hours manually digitizing
                                paper sheets, leading to high error rates and delayed reporting.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- How It Works (Timeline) */}
            <section className="py-24 bg-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-5xl font-extrabold font-manrope tracking-tight">How It
                                Works</h2>
                            <div className="space-y-12 relative">
                                {/*<!-- Step 1 */}
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">1
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold font-manrope">Admin creates a session</h4>
                                        <p className="text-on-surface-variant">A dynamic, short-lived QR code is generated
                                            instantly on the lecturer's screen or projector.</p>
                                    </div>
                                </div>
                                {/*<!-- Step 2 */}
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">2
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold font-manrope">User scans via browser</h4>
                                        <p className="text-on-surface-variant">Students scan using their phone’s browser. No
                                            app download required, ensuring 100% adoption.</p>
                                    </div>
                                </div>
                                {/*<!-- Step 3 */}
                                <div className="flex gap-6 items-start">
                                    <div
                                        className="shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg z-10">3
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold font-manrope">Validation &amp; Verification</h4>
                                        <p className="text-on-surface-variant">System validates via device fingerprinting
                                            (UUID) and a 1-time GPS check. Proxy sign-ins are instantly flagged.</p>
                                    </div>
                                </div>
                                {/*<!-- Vertical Line Connector */}
                                <div className="absolute left-5 top-0 bottom-0 w-px bg-surface-dim z-0"></div>
                            </div>
                        </div>
                        <div className="bg-surface-container-low rounded-4xl p-1 overflow-hidden">
                            <img alt="" className="w-full h-full object-cover rounded-[1.9rem]"
                                 data-alt="collaborative office environment with modern tech and diverse team members working together on data analytics"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHw0vkHx4RaUs3BhdcBizHTbVH4TWLdDj0M_ZnuYygsWwUA8-e6_WTvv00yd_xPZFuZnCFMpTqoHH8gtD8R6wSdpV7cfVx9LSKGBS6bmIpAp1mPpmkWnGMxIRtXdcNZZPddQAbUetA-yaPL8t872hjzYKJ1uQNVPvnc_ujL9hnnTtFu3d4Hc_CDv6wzM_LKOeDfxavCfoe5Q9tx8oc_2PjEzk3VzKDMnzrIcWo6usq8PKARcJPRiy53Q5UNVCO6RRhDHSD46DkOeWX"/>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Key Features (Bento Grid Style) */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold font-manrope mb-12 text-center">Built for Modern Institutions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/*<!-- Large Item */}
                        <div
                            className="md:col-span-2 bg-surface-container-lowest p-8 rounded-xl space-y-4 border border-outline-variant/10">
                            <span className="material-symbols-outlined text-4xl text-primary"
                                  data-icon="security_update_good">security_update_good</span>
                            <h3 className="text-2xl font-bold font-manrope">Dynamic Security</h3>
                            <p className="text-on-surface-variant">QR codes rotate every 15 seconds, making it impossible to
                                share pictures or bypass the verification window.</p>
                        </div>
                        {/*<!-- Small Item */}
                        <div
                            className="bg-surface-container-lowest p-8 rounded-xl space-y-4 border border-outline-variant/10">
                            <span className="material-symbols-outlined text-4xl text-secondary"
                                  data-icon="cloud_done">cloud_done</span>
                            <h3 className="text-xl font-bold font-manrope">Zero Hardware</h3>
                            <p className="text-on-surface-variant text-sm">100% web-based. Use any screen and any modern
                                smartphone.</p>
                        </div>
                        {/*<!-- Small Item */}
                        <div
                            className="bg-surface-container-lowest p-8 rounded-xl space-y-4 border border-outline-variant/10">
                            <span className="material-symbols-outlined text-4xl text-error"
                                  data-icon="fmd_bad">fmd_bad</span>
                            <h3 className="text-xl font-bold font-manrope">Fraud Prevention</h3>
                            <p className="text-on-surface-variant text-sm">GPS fencing &amp; Device ID locking ensures "One
                                Person, One Vote".</p>
                        </div>
                        {/*<!-- Row Bottom*/}
                        <div
                            className="md:col-span-4 bg-primary text-on-primary p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                            <div
                                className="absolute inset-0 bg-linear-to-r from-primary-container to-transparent opacity-50"></div>
                            <div className="relative z-10 flex-1 space-y-4">
                                <h3 className="text-3xl font-bold font-manrope">Real-time Reporting</h3>
                                <p className="text-on-primary-container text-lg max-w-xl">Automate your entire reporting
                                    pipeline. Export attendance history to Excel, CSV, or integrate directly with your
                                    LMS via API.</p>
                            </div>
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-[8rem] opacity-20"
                                      data-icon="data_exploration">data_exploration</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- Social Proof */}
            <section className="py-20 bg-surface">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-12">Trusted by
                        Innovative Institutions</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
                        <span className="text-3xl font-bold font-manrope">Acme University</span>
                        <span className="text-3xl font-bold font-manrope">EduCorp</span>
                        <span className="text-3xl font-bold font-manrope">GlobalTech</span>
                        <span className="text-3xl font-bold font-manrope">Learnly</span>
                        <span className="text-3xl font-bold font-manrope">Summit Academics</span>
                    </div>
                </div>
            </section>
            {/*<!-- Footer */}
            <footer className="w-full mt-20 bg-[#f6f3f2] dark:bg-neutral-900 border-t border-outline-variant/10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6 py-16">
                    <div className="col-span-2 space-y-6">
                        <div className="text-xl font-bold font-manrope text-neutral-800 dark:text-neutral-200">Formally
                        </div>
                        <p className="text-sm text-neutral-500 max-w-xs">Precision in attendance tracking. Modern solutions
                            for educational and corporate environments.</p>
                        <div className="flex gap-4">
                            <button onClick={handleCreateSession}
                                className="bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm">
                                Create Session
                            </button>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">Product</p>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">Resources</p>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Contact Sales</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest font-semibold text-neutral-900 dark:text-white">Legal</p>
                        <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-8 border-t border-outline-variant/10">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">© 2026 Formally Inc. All rights reserved.
                        Precision in Attendance.</p>
                </div>
            </footer>
        </div>
    )
}