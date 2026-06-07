//Core Tier Definition
export type OrganizationTier = 'free' | 'pro' | 'enterprise';

//Incident & Fraud Error Types
export type FraudIncidentType =
    | 'device_collision'
    | 'out_of_bounds'
    | 'token_expired'
    | 'rate_limited'
    | 'invalid_identity';

//Payload sent when creating a new session
export interface CreateSessionPayload {
    name: string;
    ad_hoc_email?: string;
    duration_minutes?: number;
    tier?: OrganizationTier;
    gps_enabled?: boolean;
    center_lat?: number | null;
    center_long?: number | null;
    allowed_radius_meters?: number;
    strict_device_id?: boolean;
    course_id?: string;
}

//Response returned after session creation
export interface CreateSessionResponse {
    success: boolean;
    data: {
        session_id: string;
        name: string;
        tier: OrganizationTier;
        status: 'active' | 'completed' | 'expired';
        initial_token: string;
        rotation_interval_seconds: number;
        duration_minutes: number;
        starts_at: string;
        ends_at: string;
        gps_enabled: boolean;
        strict_device_id: boolean;
    };
}

export interface FormProps {
    onSessionCreated?: (sessionData: CreateSessionResponse['data']) => void;
}

export interface QRCodeProps {
    sessionId?: string;
    initialToken?: string;
    rotationIntervalSeconds?: number;
    onOpenDashboard?: () => void;
}

//Payload sent by a student scanning the QR
export interface StudentCheckInPayload {
    session_id: string;
    student_identifier: string;
    student_name: string;
    hardware_uuid: string;
    token: string;
    lat?: number;
    long?: number;
}

//Response returned from check-in
export interface StudentCheckInResponse {
    success: boolean;
    message: string;
    incident_type?: FraudIncidentType;
    record?: {
        id: string;
        student_name: string;
        verified_at: string;
        distance_meters: number | null;
    };
}

