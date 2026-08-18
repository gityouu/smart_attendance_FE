/**
 * Translates low-level check-in errors and backend fraud incident codes
 * into clean, friendly sentences for the student UI.
 */
export const formatCheckInErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        const errorWithIncident = error as Error & { incident_type?: string };
        const incident = errorWithIncident.incident_type;
        const msg = error.message.toLowerCase();

        // 1. Backend Anti-Proxy & Quarantine Incidents
        if (incident === 'device_collision') {
            return 'This device has already submitted attendance for this class. To prevent proxy check-ins, each ' +
                'student must use their own physical phone.';
        }
        if (incident === 'out_of_bounds') {
            return 'You appear to be outside the classroom boundary. Make sure you are inside the lecture room and GPS ' +
                'is turned on.';
        }
        if (incident === 'token_expired') {
            return 'The dynamic QR code has rotated.Please re-scan the latest code.';
        }
        if (incident === 'rate_limited') {
            return 'Too many attempts detected. Please wait 30 seconds before submitting again.';
        }
        if (incident === 'invalid_identity') {
            return 'Your student ID could not be verified against the expected roster. Please re-check your student ID.';
        }

        if (incident === 'capacity_exceeded') {
            return 'Session full! The 50-person attendee limit for this free session has been reached.';
        }

        // 2. Browser & Device Hardware / GPS Issues
        if (msg.includes('permission denied') || msg.includes('geolocation') ||
            msg.includes('location')) {
            return 'Location access is required by this instructor. Please enable GPS permissions in your mobile browser ' +
                'settings.';
        }
        if (msg.includes('failed to fetch') || msg.includes('networkerror') ||
            msg.includes('connection refused')) {
            return 'Unable to reach the server. Please check your data connection or Wi-Fi and try again.';
        }

        return error.message;
    }

    return 'Could not verify your attendance. Please scan the QR code on the screen again.';
};

