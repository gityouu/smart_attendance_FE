import React, { useEffect, useState } from 'react';
import Form from "../components/session/form";
import QRCode from "../components/session/qrcode";
import SessionFooter from "../components/session/footer";
import { CreateSessionResponse } from "../types/attendance";
import { useNavigate } from "react-router-dom";

export default function SessionCreation() {
    const navigate = useNavigate();
    const [createdSession, setCreatedSession] = useState<CreateSessionResponse | null>(null);
    const [cooldownTrigger, setCooldownTrigger] = useState<number>(0);

    const handleSessionCreated = (session: CreateSessionResponse) => {
        setCreatedSession(session);
    };

    const handleSessionReset = () => {
        setCreatedSession(null);
    };

    // When the session expires: clear the QR back to default immediately and trigger host cooldown
    const handleSessionExpired = () => {
        // Clear active session so QRCode resets to default placeholder
        setCreatedSession(null);

        // 1 hour cooldown for free tier hosts
        setCooldownTrigger(3600);
    };

    const isLive = Boolean(createdSession);

    // Prevent accidental reload or closing while a session is live
    useEffect(() => {
        if (!isLive) return;

        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isLive]);

    return (
        <div className="bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 overflow-hidden flex flex-col transition-colors duration-200">
            <main className="grow flex items-center justify-center p-4 pb-9.75 md:p-10 lg:p-19">
                <div className="w-full max-w-5xl bg-surface-container-lowest dark:bg-neutral-900 rounded-xl shadow-[0_40px_100px_-20px_rgba(28,27,27,0.06)] dark:shadow-black/60 border border-transparent dark:border-neutral-800 overflow-hidden flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        {/* Form Section */}
                        <Form
                            onSessionCreated={handleSessionCreated}
                            onSessionReset={handleSessionReset}
                            isSessionActive={isLive}
                            triggerCooldownSeconds={cooldownTrigger}
                        />

                        {/* QR Placeholder / Active Section */}
                        <QRCode
                            sessionId={createdSession?.session_id}
                            initialToken={createdSession?.initial_token}
                            rotationIntervalSeconds={createdSession?.rotation_interval_seconds}
                            durationMinutes={createdSession?.duration_minutes ?? 5}
                            tier={createdSession?.tier ?? 'free'}
                            onSessionExpired={handleSessionExpired}
                            onOpenDashboard={() => {
                                if (createdSession?.session_id) {
                                    navigate(`/live-session/${createdSession.session_id}`);
                                }
                            }}
                        />
                    </div>
                </div>
            </main>

            <SessionFooter />
        </div>
    );
}
