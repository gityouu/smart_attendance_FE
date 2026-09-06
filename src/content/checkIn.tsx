import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import CheckInHeader from '../components/checkIn/header';
import CheckInLabel from '../components/checkIn/checkInLabel';
import CheckInForm from '../components/checkIn/checkInForm';
import { SuccessOverlay } from '../components/checkIn/successOverlay';
import { ExpiredOverlay } from '../components/checkIn/expiredOverlay';
import { NotFoundOverlay } from '../components/checkIn/notFoundOverlay';
import { FailureOverlay } from '../components/checkIn/failureOverlay';
import { submitCheckInApi, getPublicSessionInfoApi } from '../api/checkInApi';
import { getOrCreateHardwareUUID } from '../utils/device';
import { getBrowserCoordinates } from '../utils/geo';
import { formatCheckInErrorMessage } from '../context/checkInErrorContext';
import { AudienceType } from "../types/audience";
import { CheckInApiError, HardFailureType, SessionLifecycle } from "../types/attendance";

export default function CheckIn() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [searchParams] = useSearchParams();

    // 1. Audience Routing via URL tokens
    const isCorporate = searchParams.has('tc');
    const audience: AudienceType = isCorporate ? 'corporate' : 'school';

    // 2. Read rotating token
    const token =
        searchParams.get('tc') ||
        searchParams.get('ts') ||
        searchParams.get('t') ||
        ''
    ;

    const [lifecycle, setLifecycle] = useState<SessionLifecycle>('loading');
    const [sessionName, setSessionName] = useState<string>('');
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    // Hard terminal failure state (switches view to FailureOverlay)
    const [hardFailure, setHardFailure] = useState<HardFailureType | null>(null);

    // Initial Guard: Validate session lifecycle
    useEffect(() => {
        if (!sessionId) {
            setLifecycle('not_found');
            return;
        }

        getPublicSessionInfoApi(sessionId)
            .then((res: any) => {
                const data = res.data || res;
                setSessionName(data.name || (isCorporate ? 'Live Meeting' : 'Live Class'));

                if (data.lifecycle_state === 'completed' || data.status === 'completed') {
                    setLifecycle('completed');
                } else if (data.lifecycle_state === 'expired' || !data.is_active) {
                    setLifecycle('expired');
                } else {
                    setLifecycle('active');
                }
            })
            .catch(() => {
                setLifecycle('not_found');
            });
    }, [sessionId, isCorporate]);

    const handleCheckIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (lifecycle !== 'active') {
            toast.error('Session Closed', {
                description: 'This attendance session is no longer accepting submissions.',
            });
            return;
        }

        if (!sessionId || !token) {
            toast.error('Scan Required', {
                description: 'Please scan the active dynamic QR code on the screen.',
            });
            return;
        }

        if (audience === 'school' && !studentId.trim()) {
            toast.info('Required Field', { description: 'Please enter your Student ID.' });
            return;
        }

        if (audience === 'corporate' && !fullName.trim()) {
            toast.info('Required Field', { description: 'Please enter your Full Name.' });
            return;
        }

        setLoading(true);

        try {
            const hardwareUuid = getOrCreateHardwareUUID();
            let lat: number | undefined;
            let long: number | undefined;

            try {
                const coords = await getBrowserCoordinates();
                lat = coords.lat;
                long = coords.long;
            } catch {
                // Background geo check
            }

            // Student identifier:
            // School: uses studentId
            // Corporate: uses badge ID if typed, otherwise falls back to full name
            const identifier = audience === 'school'
                ? studentId.trim()
                : (studentId.trim() || fullName.trim())
            ;

            const name = audience === 'corporate'
                ? fullName.trim()
                : studentId.trim()
            ;

            await submitCheckInApi({
                session_id: sessionId,
                student_identifier: identifier,
                student_name: name,
                hardware_uuid: hardwareUuid,
                token: token.trim(),
                lat,
                long,
            });

            setIsVerified(true);
        } catch (err: unknown) {
            const apiError = err as CheckInApiError;
            const incident = apiError.incident_type;

            // 1. HARD BLOCKS -> Mount persistent FailureOverlay
            if (incident === 'device_collision' || incident === 'proxy_detected') {
                setHardFailure('device_collision');
                return;
            }
            if (incident === 'capacity_exceeded') {
                setHardFailure('capacity_exceeded');
                return;
            }
            if (incident === 'already_checked_in') {
                setHardFailure('already_checked_in');
                return;
            }

            // 2. SOFT / RETRIABLE ERRORS -> Toast feedback (stays on form)
            toast.error('Verification Incomplete', {
                description: formatCheckInErrorMessage(err),
            });
        } finally {
            setLoading(false);
        }
    };

    // 1. Hard anti-proxy or capacity failure
    if (hardFailure) {
        return (
            <FailureOverlay
                type={hardFailure}
                course={sessionName}
                onReset={hardFailure === 'device_collision' ? undefined : () => setHardFailure(null)}
            />
        );
    }

    // 2. Verified success
    if (isVerified) {
        return <SuccessOverlay course={sessionName || (isCorporate ? 'this meeting' : 'this session')} />;
    }

    // 3. Invalid link
    if (lifecycle === 'not_found') {
        return <NotFoundOverlay />;
    }

    // 4. Session expired / closed by host
    if (lifecycle === 'expired' || lifecycle === 'completed') {
        return <ExpiredOverlay sessionName={sessionName} lifecycleState={lifecycle} />;
    }

    // 5. Active form
    return (
        <div className="bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body min-h-screen flex flex-col transition-colors duration-200">
            <CheckInHeader />
            <main className="flex-1 w-full max-w-md mx-auto pt-20 px-6 pb-32">
                <CheckInLabel sessionName={sessionName} />

                <form onSubmit={handleCheckIn}>
                    <CheckInForm
                        audience={audience}
                        studentId={studentId}
                        fullName={fullName}
                        onStudentIdChange={setStudentId}
                        onFullNameChange={setFullName}
                    />

                    <section className="mt-8">
                        <button
                            type="submit"
                            disabled={loading || lifecycle !== 'active'}
                            className="w-full h-14 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-xl font-bold text-base disabled:opacity-50 transition-all shadow-md flex items-center justify-center"
                        >
                            {loading ? 'Verifying Presence...' : (isCorporate ? 'Check In to Meeting' : 'Check In')}
                        </button>
                    </section>
                </form>
            </main>
        </div>
    );
}
