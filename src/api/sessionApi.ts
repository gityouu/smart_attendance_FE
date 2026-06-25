import { CreateSessionPayload, CreateSessionResponse } from '../types/attendance';

export async function createSessionApi(payload: CreateSessionPayload): Promise<CreateSessionResponse['data']> {
    const response = await fetch('/api/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data: any = {};
    try {
        data = text ? JSON.parse(text) : {};
    } catch {
        throw new Error('Unexpected response format from server.');
    }

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

