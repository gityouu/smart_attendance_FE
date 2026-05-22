import {
    SessionPublicDetails,
    StudentCheckInPayload,
} from '../types/attendance';

const LAPTOP_IP = '172.20.10.2';
const API_BASE_URL = `http://${LAPTOP_IP}:5000`;

export interface CheckInResponse {
    message: string;
}

export const getSessionDetails = async (
    sessionId: string
): Promise<SessionPublicDetails> => {
    const response = await fetch(`${API_BASE_URL}/session/${sessionId}`);

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Session not found or expired.');
    }

    return (await response.json()) as SessionPublicDetails;
};

export const submitAttendance = async (
    attendanceData: StudentCheckInPayload
): Promise<CheckInResponse> => {
    const response = await fetch(`${API_BASE_URL}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attendanceData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
    }

    return data as CheckInResponse;
};