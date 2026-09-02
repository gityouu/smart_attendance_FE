import { CreateSessionPayload, CreateSessionResponse } from '../types/attendance';

export async function createSessionApi(payload: CreateSessionPayload): Promise<CreateSessionResponse> {
    const response = await fetch('/api/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        const error = new Error(data.message || 'Could not start session.') as Error & {
            code?: string;
            remaining_seconds?: number;
            status?: number;
        };
        error.code = data.code;
        error.remaining_seconds = data.remaining_seconds;
        error.status = response.status;
        throw error;
    }

    return data.data;
}

/**
 * Fetches the active rotating token for an active session.
 * Throws with status 403/404 if the session has expired or concluded.
 */
export async function refreshSessionTokenApi(sessionId: string): Promise<string> {
    const response = await fetch(`/api/sessions/${sessionId}/token`);

    if (response.status === 403 || response.status === 404) {
        const error = new Error('Session has concluded or expired.') as Error & { status?: number };
        error.status = response.status;
        throw error;
    }

    if (!response.ok) {
        throw new Error(`Failed to refresh token (status ${response.status})`);
    }

    const data = await response.json();
    if (!data.success || !data.data?.token) {
        throw new Error('Token refresh payload invalid.');
    }

    return data.data.token;
}

export async function endSessionApi(sessionId: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`/api/sessions/${sessionId}/end`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to end session early.');
    }

    return data;
}
