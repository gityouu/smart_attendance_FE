export type Step = 'email' | 'code' | 'password';

export interface FormSecProps {
    onForgotPassword?: () => void;
}

export interface ForgotPasswordProps {
    onBackToLogin?: () => void;
}

export interface SendResetCodeResponse {
    success: boolean;
    message: string;
}

export interface VerifyResetCodeResponse {
    success: boolean;
    message: string;
    resetToken: string;
}

export interface ResetPasswordResponse {
    success: boolean;
    message: string;
}
