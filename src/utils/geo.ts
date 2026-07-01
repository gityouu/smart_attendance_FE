export const getBrowserCoordinates = (): Promise<{ lat: number; long: number }> => {
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
                reject(error);
            },
            {
                enableHighAccuracy: true, // Forces phone to use satellite GPS instead of cell tower IP
                timeout: 10000,           // Give GPS 10 seconds to lock
                maximumAge: 0,            // Do not use cached coarse locations
            }
        );
    });
};