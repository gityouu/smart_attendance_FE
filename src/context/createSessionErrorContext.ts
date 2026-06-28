/**
 * Translates low-level or network errors into clear, friendly sentences.
 */
export const formatUserErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
        const msg = error.message.toLowerCase();

        if (msg.includes('failed to fetch') || msg.includes('networkerror') ||
            msg.includes('connection refused')) {
            return 'Unable to reach the server. Please check your internet connection or verify the service is running.';
        }

        if (msg.includes('permission denied') || msg.includes('gps')) {
            return 'Location access is required to lock this session to your room. Please allow location access in ' +
                'your browser.';
        }

        if (msg.includes('404') || msg.includes('unexpected end of json')) {
            return 'Service endpoint could not be found. Please check your system configuration.';
        }

        return error.message;
    }

    return 'Something unexpected happened while preparing your session. Please try again.';
};

