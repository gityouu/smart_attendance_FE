import React, { useState } from 'react';
import { toast } from 'sonner';
import { sendResetCodeApi, verifyResetCodeApi, resetPasswordWithTokenApi } from '../api/authApi';
import { ForgotPasswordProps, Step } from '../types/proLogin';

export function useForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
    const [step, setStep] = useState<Step>('email');
    const [loading, setLoading] = useState(false);

    // Form State
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [resetToken, setResetToken] = useState<string | null>(null);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Step 1: Send 6-Digit Code
    const handleSendCode = async (e: React.FormEvent) => {
        e.preventDefault();
        const cleanEmail = email.trim();

        if (!cleanEmail) {
            toast.error('Validation Error', { description: 'Please enter your account email.' });
            return;
        }

        setLoading(true);
        try {
            await sendResetCodeApi(cleanEmail);
            toast.success('Reset Code Sent', {
                description: `We've sent a 6-digit code to ${cleanEmail}`,
            });
            setStep('code');
        } catch (err: any) {
            toast.error('Request Failed', {
                description: err.message || 'Could not send verification code.',
            });
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify 6-Digit Code
    const handleVerifyCode = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cleanCode = resetCode.trim();

        if (cleanCode.length !== 6) {
            toast.error('Invalid Code', { description: 'Please enter a valid 6-digit code.' });
            return;
        }

        setLoading(true);
        try {
            const res = await verifyResetCodeApi(email.trim(), cleanCode);
            setResetToken(res.resetToken);
            toast.success('Code Verified', {
                description: 'Please set your new password.',
            });
            setStep('password');
        } catch (err: any) {
            toast.error('Verification Failed', {
                description: err.message || 'Invalid or expired code.',
            });
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Set New Password
    const handleResetPassword = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!resetToken) {
            toast.error('Session Expired', {
                description: 'Verification session expired. Please restart the request.',
            });
            setStep('email');
            return;
        }

        if (newPassword.length < 8) {
            toast.error('Password Too Short', {
                description: 'Password must be at least 8 characters long.',
            });
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error('Passwords Mismatch', {
                description: 'The passwords entered do not match.',
            });
            return;
        }

        setLoading(true);
        try {
            await resetPasswordWithTokenApi(resetToken, newPassword);
            toast.success('Password Updated', {
                description: 'Your password has been reset. Please sign in.',
            });

            // Reset form state & navigate back to login view
            setResetToken(null);
            setNewPassword('');
            setConfirmPassword('');
            if (onBackToLogin) {
                onBackToLogin();
            }
        } catch (err: any) {
            toast.error('Reset Failed', {
                description: err.message || 'Could not update your password.',
            });
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
}
