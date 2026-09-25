import { ResetPasswordResponse, SendResetCodeResponse, VerifyResetCodeResponse } from "../types/proLogin";

const API_BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Dispatches a 6-digit password reset OTP to the user's email.
 */
export async function sendResetCodeApi(email: string): Promise<SendResetCodeResponse> {
    const response = await fetch(`${API_BASE_URL}/password/send-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to dispatch reset code.');
    }

    return data;
}

/**
 * Validates the 6-digit OTP code and receives a single-use reset token.
 */
export async function verifyResetCodeApi(
    email: string,
    code: string
): Promise<VerifyResetCodeResponse> {
    const response = await fetch(`${API_BASE_URL}/password/verify-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, code }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Invalid or expired verification code.');
    }

    return data;
}

/**
 * Updates the user's password using the validated reset token.
 */
export async function resetPasswordWithTokenApi(
    resetToken: string,
    newPassword: string
): Promise<ResetPasswordResponse> {
    const response = await fetch(`${API_BASE_URL}/password/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken, newPassword }),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to reset password.');
    }

    return data;
}
