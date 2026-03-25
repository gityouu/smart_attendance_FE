import React, {useState} from 'react';
import {loginUser} from "./loginScript.js";

export function Login() {
    // 1. State Management
    const [formData, setFormData] = useState({ idEmail: '', password: '', remember: false });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // 2. Form Submission Logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await loginUser({
            identifier: formData.idEmail,
            password: formData.password
        });

        setLoading(false);

        if (result.success) {
            console.log("Login Successful:", result.data);
            // Redirect user or update Global State here
            window.location.href = '/dashboard';
        } else {
            setError(result.message);
        }
    };

    return(
    <main className="grow flex items-center justify-center lg:p-6 bg-background font-body text-on-surface max-h-screen flex-col">
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
                        <span className="font-headline font-bold text-2xl tracking-tight text-on-surface">Smart Attendance</span>
                    </div>
                </div>
                <div className="max-w-md w-full mx-auto">
                    <header className="mb-10 text-center lg:text-left">
                        <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Welcome back to Smart Attendance</h2>
                        <p className="text-on-surface-variant">Please enter your credentials to access your dashboard.</p>
                    </header>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Error Alert */}
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                                {error}
                            </div>
                        )}
                        {/*<!-- ID / Email Input*/}
                        <div>
                            <label className="block text-sm font-semibold text-on-surface-variant mb-2 px-1" htmlFor="id-email">Student/Staff ID or Email</label>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/4 text-outline" data-icon="person">person</span>
                                <input
                                    className="w-full pl-12 pr-4 py-3 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg"
                                    id="id-email"
                                    name="idEmail" // Matching state key
                                    value={formData.idEmail}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                        {/*<!-- Password Input*/}
                        <div>
                            <div className="flex justify-between items-center mb-2 px-1">
                                <label className="text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                                <a className="text-sm font-semibold text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/4 text-outline" data-icon="lock">lock</span>
                                <input
                                    className="w-full pl-12 pr-12 py-3 bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-lg"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    type="password"
                                />
                                <button className="absolute right-4 top-1/2 -translate-y-1/4 text-outline hover:text-on-surface transition-colors" type="button">
                                    <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                                </button>
                            </div>
                        </div>
                        {/*<!-- Remember Me*/}
                        <div className="flex items-center gap-3 px-1">
                            <input className="w-5 h-5 cursor-pointer rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low" id="remember" name="remember" type="checkbox"/>
                            <label className="text-sm text-on-surface-variant" htmlFor="remember">Remember me for 30 days</label>
                        </div>
                        {/*<!-- Sign In Button*/}
                        <button
                            className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg disabled:opacity-50 transition-all flex justify-center items-center gap-2"
                            type="submit"
                            disabled={loading}
                        >
                            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
                            {!loading && <span className="material-symbols-outlined text-lg">arrow_forward</span>}
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
    )
}