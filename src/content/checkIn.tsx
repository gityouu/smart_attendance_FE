import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import CheckInHeader from '../components/checkIn/header';
import CheckInLabel from '../components/checkIn/checkInLabel';
import CheckInForm from '../components/checkIn/checkInForm';
import { SuccessOverlay } from '../components/checkIn/successOverlay';
import { submitCheckInApi, getPublicSessionInfoApi } from '../api/checkInApi';
import { getOrCreateHardwareUUID } from '../utils/device';
import { getBrowserCoordinates } from '../utils/geo';
import { formatCheckInErrorMessage } from '../context/checkInErrorContext';
import { AudienceType } from "../types/audience";

export default function CheckIn() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [searchParams] = useSearchParams();

    // 1. Detect Audience from URL parameter
    // If ?tc= exists -> Corporate. Otherwise, default to School (?ts= or fallback ?t=)
    const isCorporate = searchParams.has('tc');
    const audience: AudienceType = isCorporate ? 'corporate' : 'school';

    // 2. Read token regardless of whether it's tc, ts, or legacy t
    const token =
        searchParams.get('tc') ||
        searchParams.get('ts') ||
        searchParams.get('t') ||
        '';

    const [sessionName, setSessionName] = useState<string>('');
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        if (!sessionId) return;
        getPublicSessionInfoApi(sessionId)
            .then((data) => setSessionName(data.name))
            .catch(() => setSessionName(isCorporate ? 'Live Meeting' : 'Live Class'));
    }, [sessionId, isCorporate]);

    const handleCheckIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!sessionId || !token) {
            toast.error('Scan Required', {
                description: 'Please scan the active dynamic QR code on the screen.',
            });
            return;
        }

        // Validation based on audience mode:
        // School -> only Student ID is required
        // Corporate -> Full Name is required, ID is optional
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
                : (studentId.trim() || fullName.trim());

            const name = audience === 'corporate'
                ? fullName.trim()
                : studentId.trim();

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
        } catch (err) {
            toast.error('Verification Failed', {
                description: formatCheckInErrorMessage(err),
            });
        } finally {
            setLoading(false);
        }
    };

    if (isVerified) {
        return <SuccessOverlay course={sessionName || (isCorporate ? 'this meeting' : 'this session')} />;
    }

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
                            disabled={loading}
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

