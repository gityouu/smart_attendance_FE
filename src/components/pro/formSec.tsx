import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { signIn } from "../../lib/authClient";
import LoginFoot from "./loginFoot";

export default function FormSec() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim() || !password) {
            toast.error('Missing Credentials', {
                description: 'Please enter both your email and password.',
            });
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await signIn.email({
                email: email.trim(),
                password,
                rememberMe,
            });

            if (error) {
                toast.error('Login Failed', {
                    description: error.message || 'Invalid email or password. Please try again.',
                });
                return;
            }

            toast.success('Welcome back!', {
                description: `Signed in as ${data.user.email}`,
            });

            // Redirect to host dashboard
            navigate('/dashboard');
        } catch (err: any) {
            toast.error('Connection Error', {
                description: err.message || 'Could not reach authentication server.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-y-auto">
            {/* Mobile Top Logo */}
            <div className="flex lg:hidden items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary dark:text-blue-500 text-2xl">
                        fingerprint
                    </span>
                    <span className="font-headline font-extrabold text-xl tracking-tight text-neutral-900 dark:text-white">
                        Formally
                    </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white">
                    PRO
                </span>
            </div>

            {/* Center Form Container */}
            <div className="max-w-md w-full mx-auto my-auto py-8">
                <header className="mb-8 space-y-2">
                    <h1 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-neutral-900 dark:text-white">
                        Welcome Back
                    </h1>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                        Sign in to access your host dashboard, student rosters, and active sessions.
                    </p>
                </header>

                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label
                            className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider px-0.5"
                            htmlFor="pro_email"
                        >
                            Account Email
                        </label>
                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                mail
                            </span>
                            <input
                                id="pro_email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="host@institution.edu"
                                className="w-full h-12 pl-12 pr-4 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center px-0.5">
                            <label
                                className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider"
                                htmlFor="pro_password"
                            >
                                Password
                            </label>
                            <a
                                href="/forgot-password"
                                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                Forgot?
                            </a>
                        </div>

                        <div className="relative flex items-center">
                            <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                lock
                            </span>
                            <input
                                id="pro_password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="w-full h-12 pl-12 pr-12 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                            >
                                <span className="material-symbols-outlined text-lg">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Remember Device Switch */}
                    <div className="flex items-center justify-between pt-1">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                className="w-4 h-4 rounded border-neutral-300 dark:border-neutral-700 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-xs text-neutral-600 dark:text-neutral-400">
                                Trust this host browser
                            </span>
                        </label>
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-xl font-bold text-sm disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Authenticating...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In to Pro Dashboard</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>

                {/* Ad-Hoc / Back to Free Link */}
                <div className="mt-8 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Don't have a Pro account yet?{' '}
                        <a
                            href="/session-creation"
                            className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Launch free ad-hoc session
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Legal Metadata */}
            <LoginFoot />
        </section>
    );
}
