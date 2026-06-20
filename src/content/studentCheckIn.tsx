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
import { formatCheckInErrorMessage } from "../context/checkInErrorContext";

export default function StudentCheckIn() {
    const { sessionId } = useParams<{ sessionId: string }>();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('t') || '';

    const [sessionName, setSessionName] = useState<string>('');
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    // Fetch session title when component loads
    useEffect(() => {
        if (!sessionId) return;

        getPublicSessionInfoApi(sessionId)
            .then((data) => {
                setSessionName(data.name);
            })
            .catch(() => {
                setSessionName('Active Session');
            });
    }, [sessionId]);

    const handleCheckIn = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!sessionId) {
            toast.error('Invalid Session', {
                description: 'Session identifier is missing from your link.',
            });
            return;
        }

        if (!token) {
            toast.error('Token Missing', {
                description: 'Please scan the active dynamic QR code on the presenter screen.',
            });
            return;
        }

        if (!studentId.trim() || !fullName.trim()) {
            toast.info('Required Fields', {
                description: 'Please provide both your Student ID and Full Name.',
            });
            return;
        }

        setLoading(true);

        try {
            // 1. Get hardware UUID
            const hardwareUuid = getOrCreateHardwareUUID();

            // 2. Acquire current GPS position if available
            let lat: number | undefined;
            let long: number | undefined;

            try {
                const coords = await getBrowserCoordinates();
                lat = coords.lat;
                long = coords.long;
            } catch {
                // Location will be passed as undefined; backend checks if session requires GPS
            }

            // 3. Post verification payload
            await submitCheckInApi({
                session_id: sessionId,
                student_identifier: studentId.trim(),
                student_name: fullName.trim(),
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
        return <SuccessOverlay course="this session" />;
    }

    return (
        <div className="bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 font-body min-h-screen flex flex-col transition-colors duration-200">
            <CheckInHeader />
            <main className="flex-1 w-full max-w-md mx-auto pt-20 px-6 pb-32">
                <CheckInLabel sessionName={sessionName} />

                <form onSubmit={handleCheckIn}>
                    <CheckInForm
                        studentId={studentId}
                        fullName={fullName}
                        onStudentIdChange={setStudentId}
                        onFullNameChange={setFullName}
                    />

                    <section className="mt-10">
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full h-16 bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white rounded-2xl font-bold text-lg disabled:opacity-50 transition-all shadow-md flex items-center justify-center"
                        >
                            {loading ? 'Verifying Presence...' : 'Check In'}
                        </button>
                    </section>
                </form>
            </main>
        </div>
    );
}

