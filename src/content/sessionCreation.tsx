import React, { useEffect, useState } from 'react';
import Form from "../components/session/form";
import QRCode from "../components/session/qrcode";
import SessionFooter from "../components/session/footer";
import { CreateSessionResponse } from "../types/attendance";
import { useNavigate } from "react-router-dom";

export default function SessionCreation() {
    const navigate = useNavigate();
    const [createdSession, setCreatedSession] = useState<CreateSessionResponse['data'] | null>(null);

    // Prevent accidental reload or closing while a session is live
    useEffect(() => {
        if (!createdSession) return;

        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            // Standard web API pattern for triggering native reload confirmation dialog
            event.preventDefault();
            (event as unknown as { returnValue: string }).returnValue = ''; //returnValue triggers the browser prompt
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [createdSession]);

    return (
        <div className={"bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 overflow-hidden flex " +
            "flex-col transition-colors duration-200"}>

            <main className="grow flex items-center justify-center p-4 pb-9.75! md:p-10 lg:p-19">

                <div className={"w-full max-w-5xl bg-surface-container-lowest dark:bg-neutral-900 rounded-xl " +
                    "shadow-[0_40px_100px_-20px_rgba(28,27,27,0.06)] dark:shadow-black/60 border border-transparent " +
                    "dark:border-neutral-800 overflow-hidden flex flex-col"}>

                    <div className="flex flex-col md:flex-row">

                        {/* Form Section */}
                        <Form onSessionCreated={(session) => setCreatedSession(session)} />

                        {/* QR Placeholder / Active Section */}
                        <QRCode
                            sessionId={createdSession?.session_id}
                            initialToken={createdSession?.initial_token}
                            rotationIntervalSeconds={createdSession?.rotation_interval_seconds || 30}
                            onOpenDashboard={() => {
                                if (createdSession) {
                                    navigate(`/live-session/${createdSession.session_id}`);
                                }
                            }}
                        />
                    </div>
                </div>
            </main>

            {/* Bottom Footer */}
            <SessionFooter />
        </div>
    );
}

