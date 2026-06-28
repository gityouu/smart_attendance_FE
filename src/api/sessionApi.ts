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
