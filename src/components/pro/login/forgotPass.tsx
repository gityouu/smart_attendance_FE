import React from 'react';
import LoginFoot from './loginFoot';
import { ForgotPasswordProps } from '../../../types/proLogin';
import { useForgotPassword } from "../../../hooks/forgotPassHook";

export default function ForgotPasswordSec({ onBackToLogin }: ForgotPasswordProps) {
    const {
        step,
        setStep,
        loading,
        email,
        setEmail,
        resetCode,
        setResetCode,
        newPassword,
        setNewPassword,
        confirmPassword,
        setConfirmPassword,
        showPassword,
        setShowPassword,
        handleSendCode,
        handleVerifyCode,
        handleResetPassword,
    } = useForgotPassword({ onBackToLogin });

    return (
        <section className="flex-1 flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-y-auto animate-in fade-in duration-300">
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

            {/* Central Form Container */}
            <div className="max-w-md w-full mx-auto my-auto py-8">
                <header className="mb-8 space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-xl">
                            {step === 'password' ? 'lock_reset' : step === 'code' ? 'mark_email_read' : 'lock_open'}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-neutral-900 dark:text-white">
                        {step === 'email' && 'Reset Password'}
                        {step === 'code' && 'Enter Verification Code'}
                        {step === 'password' && 'Create New Password'}
                    </h1>

                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                        {step === 'email' && "Enter your account email and we'll send a code to reset your password."}
                        {step === 'code' && `We sent a security code to ${email}. Enter it below.`}
                        {step === 'password' && 'Choose a strong password to protect your host account.'}
                    </p>
                </header>

                {/* Step 1: Request Email */}
                {step === 'email' && (
                    <form onSubmit={handleSendCode} className="space-y-4 animate-in fade-in duration-200">
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider px-0.5">
                                Account Email
                            </label>
                            <div className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                    mail
                                </span>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="host@institution.edu"
                                    className="w-full h-12 pl-12 pr-4 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-xl font-bold text-sm disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 pt-1"
                        >
                            {loading ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Send Reset Code</span>
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </>
                            )}
                        </button>
                    </form>
                )}

                {/* Step 2: Code Verification */}
                {step === 'code' && (
                    <form onSubmit={handleVerifyCode} className="space-y-4 animate-in fade-in duration-200">
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-0.5">
                                <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider">
                                    6-Digit Reset Code
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setStep('email')}
                                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    Change email
                                </button>
                            </div>
                            <div className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                    pin
                                </span>
                                <input
                                    type="text"
                                    required
                                    maxLength={6}
                                    value={resetCode}
                                    onChange={(e) => setResetCode(e.target.value.trim())}
                                    placeholder="123456"
                                    className="w-full h-12 pl-12 pr-4 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-base tracking-widest font-mono text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-xl font-bold text-sm disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 pt-1"
                        >
                            {loading ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Verify Code</span>
                                    <span className="material-symbols-outlined text-sm">check</span>
                                </>
                            )}
                        </button>

                        <div className="text-center pt-2">
                            <button
                                type="button"
                                onClick={handleSendCode}
                                disabled={loading}
                                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:underline"
                            >
                                Didn't receive a code? Resend
                            </button>
                        </div>
                    </form>
                )}

                {/* Step 3: New Password & Confirm */}
                {step === 'password' && (
                    <form onSubmit={handleResetPassword} className="space-y-4 animate-in fade-in duration-200">
                        {/* New Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider px-0.5">
                                New Password
                            </label>
                            <div className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                    lock
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="At least 8 characters"
                                    className="w-full h-12 pl-12 pr-12 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="block text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider px-0.5">
                                Confirm New Password
                            </label>
                            <div className="relative flex items-center">
                                <span className="material-symbols-outlined absolute left-4 text-neutral-400 text-xl pointer-events-none">
                                    lock_reset
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Repeat password"
                                    className="w-full h-12 pl-12 pr-4 bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-neutral-800 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-xl font-bold text-sm disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 pt-1"
                        >
                            {loading ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <span>Update Password & Log In</span>
                                    <span className="material-symbols-outlined text-sm">lock_open</span>
                                </>
                            )}
                        </button>
                    </form>
                )}

                {/* Back to Login Trigger */}
                <div className="mt-8 text-center">
                    <button
                        type="button"
                        onClick={onBackToLogin}
                        className="text-xs font-bold text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span>Back to Pro sign in</span>
                    </button>
                </div>
            </div>

            {/* Bottom Metadata */}
            <LoginFoot />
        </section>
    );
}
