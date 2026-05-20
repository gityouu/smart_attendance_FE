//TODO: to be refractor for the new approach

export interface CreateSessionPayload {
    course_name: string;
    lecturer_email: string;
    duration_minutes: number;
    gps_enabled: boolean;
    device_id_strict: boolean;
    lat: number | null;
    long: number | null;
}

export interface SessionRecord {
    session_id: string;
    course_name: string;
    lecturer_email: string;
    duration_minutes: number;
    lat_threshold: number | null;
    long_threshold: number | null;
    is_active: boolean;
    created_at: string;
    expires_at: string;
}

export interface CreateSessionResponse extends SessionRecord {
    success: boolean;
    message: string;
    sessionUrl: string;
}

export interface StudentCheckInPayload {
    session_id: string;
    student_id: string;
    student_name: string;
    device_uuid: string;
    lat: number | null;
    long: number | null;
    token: string | null;
}

export interface SessionPublicDetails {
    course_name: string;
    expires_at: string;
    lat_threshold: number | null;
    long_threshold: number | null;
}
