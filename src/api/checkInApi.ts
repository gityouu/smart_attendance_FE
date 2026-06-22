import { StudentCheckInPayload, StudentCheckInResponse } from '../types/attendance';

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Submits student attendance payload to the backend verification engine.
 */
export async function submitCheckInApi(
    payload: StudentCheckInPayload
): Promise<StudentCheckInResponse> {
    const response = await fetch(`${API_BASE_URL}/attendance/check-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data;
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        throw new Error('Our servers returned an unexpected response. Please try scanning again.');
    }

    if (!response.ok || !data.success) {
        const errorMsg = data.message || 'Check-in verification failed.';
        const incidentType = data.incident_type;
        const error = new Error(errorMsg) as Error & { incident_type?: string };
        error.incident_type = incidentType;
        throw error;
    }

    return data;
}

export async function getPublicSessionInfoApi(sessionId: string): Promise<{ name: string; is_active: boolean }> {
    const res = await fetch(`${API_BASE_URL}/sessions/${sessionId}/public`);
    const data = await res.json();

    if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to load session details.');
    }

    return data.data;
}