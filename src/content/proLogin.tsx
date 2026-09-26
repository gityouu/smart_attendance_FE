import React, { useEffect, useState } from 'react';
import BrandVisuals from '../components/pro/login/brandVisuals';
import FormSec from '../components/pro/login/formSec';
import ForgotPasswordSec from "../components/pro/login/forgotPass";
import { useNavigate } from "react-router-dom";
import { useSession } from "../lib/authClient";

export default function ProLogin() {
    const [view, setView] = useState<'login' | 'forgot-password'>('login');

    const { data: session, isPending } = useSession();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isPending && session?.user) {
            navigate('/dashboard', { replace: true });
        }
    }, [session, isPending, navigate]);

    return (
        <div className={"h-screen w-screen overflow-hidden flex bg-surface dark:bg-neutral-950 text-on-surface " +
            "dark:text-neutral-100 font-body transition-colors duration-200"}>
            {/* Left Stage: Always Pinned */}
            <BrandVisuals />

            {/* Right Stage: Toggles in-place */}
            {view === 'login' ? (
                <FormSec onForgotPassword={() => setView('forgot-password')} />
            ) : (
                <ForgotPasswordSec onBackToLogin={() => setView('login')} />
            )}
        </div>
    );
}
