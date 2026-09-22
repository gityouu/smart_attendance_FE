import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { signIn } from "../lib/authClient";
import { getDeterministicHardwareHash } from "../utils/device";

export function useProLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

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
            const hardwareHash = getDeterministicHardwareHash();
            const destination = (location.state as any)?.from?.pathname || '/dashboard';

            const { data, error } = await signIn.email({
                email: email.trim(),
                password,
                rememberMe,
                callbackURL: destination,
                fetchOptions: {
                    headers: {
                        'x-hardware-uuid': hardwareHash,
                        'x-trust-device': rememberMe ? 'true' : 'false',
                    },
                },
            });

            if (error) {
                toast.error('Login Failed', {
                    description: error.message || 'Invalid email or password. Please try again.',
                });
                setLoading(false);
                return;
            }

            if (rememberMe) {
                localStorage.setItem('formally_trusted_host_device', 'true');
                localStorage.setItem('formally_last_host_email', email.trim());
            } else {
                localStorage.removeItem('formally_trusted_host_device');
            }

            toast.success('Welcome back!', {
                description: `Signed in as ${data.user.email}`,
            });

            // Hard redirect ensures fresh session recognition and avoids router race conditions
            window.location.href = destination;
        } catch (err: any) {
            toast.error('Connection Error', {
                description: err.message || 'Could not reach authentication server.',
            });
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        rememberMe,
        setRememberMe,
        loading,
        handleLogin,
    };
}
