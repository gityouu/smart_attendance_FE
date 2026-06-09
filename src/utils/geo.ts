export interface Coordinates {
    lat: number;
    long: number;
}

export const getBrowserCoordinates = (): Promise<Coordinates> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            return reject(new Error('Geolocation is not supported by your browser.'));
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                });
            },
            (error) => {
                let msg = 'Failed to retrieve location.';
                if (error.code === 1) msg = 'Location permission denied. Please allow GPS access.';
                if (error.code === 2) msg = 'Location unavailable. Check device GPS settings.';
                if (error.code === 3) msg = 'Location request timed out. Please try again.';
                reject(new Error(msg));
            },
            { enableHighAccuracy: true, timeout: 8000, maximumAge: 0 }
        );
    });
};

