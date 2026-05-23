import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSessionDetails, submitAttendance } from '../api/studentAttendance';
import { SessionPublicDetails, StudentCheckInPayload } from '../types/attendance';

interface FormState {
    student_id: string;
    full_name: string;
}

interface StatusState {
    loading: boolean;
    error: string | null;
    success: boolean;
}

interface SuccessOverlayProps {
    course?: string | undefined;
}

export default function StudentCheckIn() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [sessionInfo, setSessionInfo] = useState<SessionPublicDetails | null>(null);
    const [formData, setFormData] = useState<FormState>({ student_id: '', full_name: '' });
    const [status, setStatus] = useState<StatusState>({ loading: false, error: null, success: false });

    // 1. Fetch Session Info & Handle Device ID on Load
    useEffect(() => {
        if (!sessionId || sessionId === 'undefined' || sessionId.length < 10) return;

        const init = async (): Promise<void> => {
            try {
                const data = await getSessionDetails(sessionId);
                setSessionInfo(data);

                // Set or Retrieve Device UUID
                if (!localStorage.getItem('formally_device_id')) {
                    localStorage.setItem('formally_device_id', crypto.randomUUID());
                }
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : 'Invalid or Expired Session';
                setStatus(prev => ({ ...prev, error: message }));
            }
        };

        void init();
    }, [sessionId]);

    // 2. Handle GPS & Submission
    const handleCheckIn = async () => {
        if (!sessionId) {
            setStatus(prev => ({ ...prev, error: 'Invalid session ID in URL.' }));
            return;
        }

        const deviceUuid = localStorage.getItem('formally_device_id') || crypto.randomUUID();
        localStorage.setItem('formally_device_id', deviceUuid);

        setStatus(prev => ({ ...prev, loading: true, error: null }));

        try {
            // Get Student GPS
            const pos = await new Promise<GeolocationPosition>((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej, {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                });
            });

            const payload: StudentCheckInPayload = {
                session_id: sessionId,
                student_id: formData.student_id,
                student_name: formData.full_name,
                device_uuid: deviceUuid,
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
                token: new URLSearchParams(window.location.search).get('t')
            };

            await submitAttendance(payload);
            setStatus({ loading: false, error: null, success: true });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Attendance submission failed.';
            setStatus({ loading: false, error: message, success: false });
        }
    };

    if (status.success) return <SuccessOverlay course={sessionInfo?.course_name} />;

    return (
        <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
            <header className="fixed top-0 w-full z-50 bg-[#fcf9f8] dark:bg-stone-950">
                <div className="flex items-center justify-between px-6 h-16 w-full max-w-md mx-auto">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#0052CC] dark:text-[#4d94ff] text-2xl" data-icon="fingerprint">
                            fingerprint
                        </span>
                        <h1 className="font-['Manrope'] font-extrabold tracking-tighter text-xl text-[#1c1b1b] dark:text-white">
                            Formally
                        </h1>
                    </div>
                    <button className="p-2 rounded-full hover:bg-[#f6f3f2] dark:hover:bg-stone-800 transition-colors active:scale-95 duration-200">
                        <span className="material-symbols-outlined text-on-surface-variant" data-icon="help_outline">
                            help_outline
                        </span>
                    </button>
                </div>
            </header>

            <main className="flex-1 w-full max-w-md mx-auto pt-20 px-6 pb-32">
                <section className="mb-8">
                    <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_-8px_40px_rgba(28,27,27,0.02)] border border-outline-variant/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant/70">
                                Current Session
                            </span>
                            <div className="flex items-center gap-1.5 bg-secondary-container px-2.5 py-1 rounded-full">
                                <div className="w-2 h-2 bg-secondary rounded-full pulse-indicator"></div>
                                <span className="text-[10px] font-bold text-on-secondary-container uppercase tracking-tight">
                                    Live
                                </span>
                            </div>
                        </div>
                        <h2 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface">
                            {sessionInfo?.course_name || "Loading..."}
                        </h2>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="space-y-2">
                        <label className="font-label text-sm font-semibold text-on-surface px-1" htmlFor="student_id">
                            Student ID
                        </label>
                        <input
                            id="student_id"
                            className="w-full h-14 px-4 bg-gray-100 rounded-xl"
                            placeholder="Student ID"
                            value={formData.student_id}
                            onChange={e => setFormData({ ...formData, student_id: e.target.value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-label text-sm font-semibold text-on-surface px-1" htmlFor="full_name">
                            Full Name
                        </label>
                        <input
                            id="full_name"
                            className="w-full h-14 px-4 bg-gray-100 rounded-xl"
                            placeholder="Full Name"
                            value={formData.full_name}
                            onChange={e => setFormData({ ...formData, full_name: e.target.value })}
                        />
                    </div>

                    {status.error && (
                        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-xl text-sm font-bold">
                            {status.error}
                        </div>
                    )}

                    <div className="flex items-start gap-4 p-4 bg-surface-container-low/50 rounded-2xl border border-outline-variant/10">
                        <div className="shrink-0 mt-0.5">
                            <span className="material-symbols-outlined text-primary text-xl" data-icon="location_on">
                                location_on
                            </span>
                        </div>
                        <p className="text-xs leading-relaxed text-on-surface-variant">
                            By checking in, your current location and device ID will be verified for attendance validity.{' '}
                            <a className="text-primary font-semibold underline underline-offset-2" href="#">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </section>

                <section className="mt-10">
                    <button
                        onClick={handleCheckIn}
                        disabled={status.loading || !sessionInfo}
                        className="w-full h-16 bg-blue-600 text-white rounded-2xl font-bold text-lg disabled:opacity-50"
                    >
                        {status.loading ? "Verifying..." : "Check In"}
                    </button>
                </section>
            </main>
        </div>
    );
}

const SuccessOverlay: React.FC<SuccessOverlayProps> = ({ course }) => (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-8 text-center">
        <span className="material-symbols-outlined text-green-500 text-7xl mb-4">check_circle</span>
        <h2 className="text-3xl font-bold">Verified!</h2>
        <p className="mt-2 text-gray-600">Your attendance for {course || 'this course'} is logged.</p>
    </div>
);