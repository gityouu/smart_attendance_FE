import { CreateSessionPayload, CreateSessionResponse } from '../types/attendance';

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Sends a creation request to POST /api/sessions and returns the verified session data.
 */
export async function createSessionApi(payload: CreateSessionPayload): Promise<CreateSessionResponse['data']> {
    const response = await fetch(`${API_BASE_URL}/sessions`, {
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
        throw new Error('Our servers returned an invalid response. Please try again shortly.');
    }

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to create session.');
    }

    return data.data;
}

