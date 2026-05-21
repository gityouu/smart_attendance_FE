import { CreateSessionPayload, CreateSessionResponse } from '../types/attendance';

const LAPTOP_IP = '172.20.10.2';
const API_BASE_URL = `http://${LAPTOP_IP}:5000`;

export const createSession = async (
    sessionData: CreateSessionPayload
): Promise<CreateSessionResponse> => {
    const response = await fetch(`${API_BASE_URL}/create-session`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sessionData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Failed to create session');
    }

    return data as CreateSessionResponse;
};