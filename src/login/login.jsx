import React from 'react';

export function Login() {
    return(
    <body className="bg-background font-body text-on-surface min-h-screen flex flex-col">
    {/*Login Container*/}
    <main className="grow flex items-center justify-center lg:p-6">
        <div className="w-full max-w-7xl lg:grid lg:grid-cols-2 lg:bg-surface-container-lowest lg:rounded-xl lg:overflow-hidden lg:shadow-xl lg:min-h-200">
            {/*<!-- Left Side: Visual/Branding (Hidden on mobile)*/}
            <div className="hidden lg:flex flex-col relative overflow-hidden bg-primary">
                <img alt="School environment" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" data-alt="A sun-drenched modern university hallway with students walking between classNamees, featuring warm wooden architecture and soft natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTXPSgaj40lSaxS4hr-ehGdk-OSB9NQGT0JOf5tvo4CqP34ssE7sav0tajp6VUQHSGEAbPvEnbAn7A03bFqleUXCWx6S2Gi9-4T8djbwvAD0r_l5ajNNfQNRScvEMX8zU8JwbP2Ne5v6vQygsPGs6qGRKaTCLpSuzj3TK5F0Iq4srfjt72BN2-JyMU5a9KkDpcvkDywccczVET_QZ2MznX7K-EZt87tUxcqV16P2O12qOZrMf6ejDu55FS9PmV0lZm5YgpyBv3dTuF"/>
                <div className="relative z-10 flex flex-col justify-between h-full p-12 text-on-primary">
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <span className="material-symbols-outlined text-4xl" data-icon="park">park</span>
                            <span className="font-headline font-bold text-2xl tracking-tight">Smart Attendance</span>
                        </div>
                        <h1 className="font-headline text-5xl font-bold leading-tight mb-6">Rooted in Growth, Measured in Moments.</h1>
                        <p className="text-xl opacity-90 leading-relaxed max-w-md">The modern standard for educational presence, designed for warmth and precision.</p>
                    </div>
                    <div className="bg-primary-container/20 backdrop-blur-md p-6 rounded-lg border border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="material-symbols-outlined text-tertiary-fixed" data-icon="verified_user">verified_user</span>
                            <span className="font-semibold">Trusted by 500+ Schools</span>
                        </div>
                        <p className="text-sm opacity-80">Join the ecosystem where technology meets human connection.</p>
                    </div>
                </div>
            </div>
            {/*<!-- Right Side: Login Form*/}
            <div className="flex flex-col justify-center px-6 py-12 md:px-16 lg:px-24 bg-surface-container-lowest">
                {/*<!-- Mobile Logo*/}
                <div className="lg:hidden flex justify-center mb-10">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl" data-icon="park">park</span>
                        <span className="font-headline font-bold text-2xl tracking-tight text-on-surface">Terra Attendance</span>
                    </div>
                </div>
                <div className="max-w-md w-full mx-auto">
                    <header className="mb-10 text-center lg:text-left">
                        <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Welcome back to Terra Attendance</h2>
                        <p className="text-on-surface-variant">Please enter your credentials to access your dashboard.</p>
                    </header>
                    <form className="space-y-6">
                        {/*<!-- ID / Email Input*/}
                        <div>
                            <label className="block text-sm font-semibold text-on-surface-variant mb-2 px-1" htmlFor="id-email">Student/Staff ID or Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="person">person</span>
                                <input className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline/60" id="id-email" name="id-email" placeholder="e.g. STU12345 or name@school.edu" required="" type="text"/>
                            </div>
                        </div>
                        {/*<!-- Password Input*/}
                        <div>
                            <div className="flex justify-between items-center mb-2 px-1">
                                <label className="text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                                <a className="text-sm font-semibold text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="lock">lock</span>
                                <input className="w-full pl-12 pr-12 py-3 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline/60" id="password" name="password" placeholder="••••••••" required="" type="password"/>
                                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors" type="button">
                                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                                </button>
                            </div>
                        </div>
                        {/*<!-- Remember Me*/}
                        <div className="flex items-center gap-3 px-1">
                            <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low" id="remember" name="remember" type="checkbox"/>
                            <label className="text-sm text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
                        </div>
                        {/*<!-- Sign In Button*/}
                        <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg shadow-sm hover:shadow-md hover:brightness-110 active:scale-[0.98] transition-all flex justify-center items-center gap-2" type="submit">
                            <span>Sign In</span>
                            <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
                        </button>
                        {/*<!-- Divider*/}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-outline-variant"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-surface-container-lowest text-outline italic">or continue with</span>
                            </div>
                        </div>
                        {/*<!-- Google Sign In*/}
                        <button className="w-full py-3 bg-surface-container-low border border-outline-variant text-on-surface-variant font-semibold rounded-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-3" type="button">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                            </svg>
                            <span>Sign in with Google for Education</span>
                        </button>
                    </form>
                    {/*<!-- Support Footer*/}
                    <p className="mt-10 text-center text-sm text-on-surface-variant">
                        Need help accessing your account? <br className="md:hidden"/>
                        <a className="text-primary font-bold hover:underline" href="#">Contact School Support</a>
                    </p>
                </div>
            </div>
        </div>
    </main>
    {/*<!-- Footer Component*/}
    <footer className="w-full py-8 mt-auto bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-500" data-icon="nature">nature</span>
                <span className="font-['Literata'] font-semibold text-stone-800 dark:text-stone-200">Smart Education Systems</span>
            </div>
            <p className="font-['Nunito_Sans'] text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                © 2024 Smart Education Systems. Rooted in Growth.
            </p>
            <nav className="flex gap-6">
                <a className="font-['Nunito_Sans'] text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-opacity hover:opacity-80" href="#">Privacy Policy</a>
                <a className="font-['Nunito_Sans'] text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-opacity hover:opacity-80" href="#">Terms of Service</a>
                <a className="font-['Nunito_Sans'] text-sm text-stone-500 dark:text-stone-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-opacity hover:opacity-80" href="#">Support</a>
            </nav>
        </div>
    </footer>
    </body>
    )
}