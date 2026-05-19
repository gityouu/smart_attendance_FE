import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { createSession } from '../api/sessionCreation';
import { CreateSessionResponse } from '../types/attendance';


//TODO: refactor for the approach
interface Coordinates {
    lat: number;
    long: number;
}

export default function SessionCreation() {
    const [formData, setFormData] = useState({
        course_name: '',
        lecturer_email: '',
        duration_minutes: 10,
        gps_enabled: false,
        device_id_strict: false
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [sessionResult, setSessionResult] = useState<CreateSessionResponse | null>(null);
    const [tempToken, setTempToken] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    // 2. Handle GPS Logic
    const getCoordinates = (): Promise<Coordinates> => {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                return reject(new Error("Geolocation is not supported by your browser."));
            }

            const options: PositionOptions = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve({
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    });
                },
                (error) => {
                    let msg = "Unknown error getting location.";
                    if (error.code === 1) msg = "Please allow location access to create a session.";
                    if (error.code === 3) msg = "Location request timed out. Try again.";
                    reject(new Error(msg));
                },
                options
            );
        });
    };

    // 1. Rotation Logic: Updates the token every 60 seconds
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;

        if (sessionResult) {
            const generateToken = () => {
                const newToken = btoa(`${sessionResult.session_id}-${Math.floor(Date.now() / 10000)}`);
                setTempToken(newToken);
            };

            generateToken();
            interval = setInterval(generateToken, 60000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [sessionResult]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            let lat: number | null = null;
            let long: number | null = null;

            if (formData.gps_enabled) {
                try {
                    const coords = await getCoordinates();
                    lat = coords.lat;
                    long = coords.long;
                } catch (gpsError) {
                    const message = gpsError instanceof Error ? gpsError.message : "Failed to retrieve GPS location.";
                    throw new Error(message);
                }
            }

            const payload = {
                ...formData,
                lat,
                long
            };

            const result = await createSession(payload);
            setSessionResult(result);
            setLoading(false);
        } catch (err) {
            const message = err instanceof Error ? err.message : "An unexpected error occurred.";
            setError(message);
            setLoading(false);
        }
    };

    const LOCAL_IP = "172.20.10.2";
    const FRONTEND_PORT = "5173";

    const scanUrl = sessionResult
        ? `http://${LOCAL_IP}:${FRONTEND_PORT}/student-check-in/${sessionResult.session_id}?t=${tempToken}`
        : '';

    return (
        <div className="bg-surface text-on-surface min-h-screen flex flex-col">
            {isExpanded && (
                <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-10 animate-in fade-in duration-300">
                    <button
                        onClick={() => setIsExpanded(false)}
                        className="absolute top-10 right-10 text-white p-2 hover:bg-white/10 rounded-full"
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>
                    <div className="bg-white p-10 rounded-3xl shadow-2xl">
                        <QRCodeSVG value={scanUrl} size={window.innerHeight * 0.6} level="H" />
                    </div>
                    <p className="mt-8 text-white text-2xl font-bold tracking-widest uppercase animate-pulse">
                        Scan to Check In
                    </p>
                </div>
            )}

            <main className="grow flex items-center justify-center p-6 md:p-12 lg:p-20">
                <div className="w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-[0_40px_100px_-20px_rgba(28,27,27,0.06)] overflow-hidden flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        <section className="flex-1 p-8 lg:p-12 bg-surface-container-lowest">
                            <header className="mb-10">
                                <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                                    Launch a New Session
                                </h1>
                                <p className="text-on-surface-variant text-sm font-medium">
                                    No account needed. Fill in the details and start tracking.
                                </p>
                                {error && <p className="text-red-500 text-xs mt-2 font-bold uppercase italic">{error}</p>}
                            </header>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                                        Course Name / Code
                                    </label>
                                    <input
                                        onChange={(e) => setFormData({...formData, course_name: e.target.value})}
                                        value={formData.course_name}
                                        className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline transition-all form-input-shadow"
                                        placeholder="e.g. CS101 - Introduction to Algorithms"
                                        type="text"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex items-center space-x-2">
                                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                                            Lecturer Email
                                        </label>
                                        <div className="group relative cursor-help">
                                            <span className="material-symbols-outlined text-base text-primary">info</span>
                                            <div className="absolute bottom-full left-full -translate-x-1/2 mb-2 w-48 p-2 bg-inverse-surface text-inverse-on-surface text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                We’ll email your final attendance report here.
                                            </div>
                                        </div>
                                    </div>
                                    <input
                                        onChange={(e) => setFormData({...formData, lecturer_email: e.target.value})}
                                        value={formData.lecturer_email}
                                        className="w-full px-4 py-3 bg-surface-container-low border-0 focus:ring-2 focus:ring-primary rounded-lg text-on-surface placeholder:text-outline transition-all form-input-shadow"
                                        placeholder="lecturer@university.edu"
                                        type="email"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                                        Session Duration
                                    </label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[10, 20, 30].map(time => (
                                            <button
                                                key={time}
                                                type="button"
                                                onClick={() => setFormData({...formData, duration_minutes: time})}
                                                className={`py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${formData.duration_minutes === time ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface'}`}
                                            >
                                                {time}m
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-sm font-semibold block">GPS Verification</span>
                                            <span className="text-xs text-on-surface-variant">Lock to classroom area</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({...formData, gps_enabled: !formData.gps_enabled})}
                                            className={`w-11 h-6 rounded-full relative transition-colors ${formData.gps_enabled ? 'bg-secondary' : 'bg-surface-container-highest'}`}
                                        >
                                            <span className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all ${formData.gps_enabled ? 'right-1' : 'left-1'}`}></span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-semibold text-on-surface">Strict Device ID (Anti-Proxy)</span>
                                            <span className="text-xs text-on-surface-variant">One submission per physical hardware device</span>
                                        </div>
                                        <button
                                            onClick={() => setFormData({...formData, device_id_strict: !formData.device_id_strict})}
                                            className={`w-11 h-6 rounded-full relative transition-colors duration-200 focus:outline-none ${formData.device_id_strict ? 'bg-secondary' : 'bg-surface-container-highest'}`}
                                            type="button"
                                        >
                                            <span className={`absolute top-1 bg-white w-4 h-4 rounded-full shadow-sm transition-all ${formData.device_id_strict ? 'right-1' : 'left-1'}`}></span>
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <button
                                        disabled={loading}
                                        className="w-full py-4 bg-primary text-white font-bold rounded-lg"
                                    >
                                        {loading ? (formData.gps_enabled ? 'Acquiring GPS...' : 'Creating...') : 'Generate Smart QR Code'}
                                    </button>
                                </div>
                            </form>
                        </section>

                        <section className="flex-1 bg-surface-container-low p-8 lg:p-12 flex flex-col items-center justify-center border-l border-surface-container opacity-40">
                            {!sessionResult ? (
                                <div className="text-center opacity-30">
                                    <div className="w-64 h-64 bg-surface-dim rounded-2xl flex items-center justify-center border-4 border-dashed border-outline">
                                        <span className="material-symbols-outlined text-6xl text-outline">qr_code_2</span>
                                    </div>
                                    <p className="mt-4 font-medium text-on-surface">Waiting for Setup...</p>
                                </div>
                            ) : (
                                <div className="text-center animate-in fade-in zoom-in duration-500">
                                    <div className="relative group inline-block">
                                        <div className="bg-white p-4 rounded-2xl shadow-lg">
                                            <QRCodeSVG
                                                value={scanUrl}
                                                size={220}
                                                level={"H"}
                                                marginSize={4}
                                            />
                                        </div>

                                        <button
                                            onClick={() => setIsExpanded(true)}
                                            className="absolute -top-3 -right-3 bg-primary text-on-primary w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
                                            title="Expand QR Code"
                                        >
                                            <span className="material-symbols-outlined text-2xl">fullscreen</span>
                                        </button>
                                    </div>
                                    <div className="mt-6 space-y-4">
                                        <div className="flex items-center justify-center space-x-2 text-green-600 font-bold">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                                            <span>Session Live</span>
                                        </div>
                                        <p className="text-xs text-on-surface-variant italic">Scan to test or proceed to dashboard</p>

                                        <button
                                            onClick={() => window.location.href = `/live-session/${sessionResult.session_id}`}
                                            className="px-6 py-2 bg-secondary text-on-secondary rounded-full font-bold flex items-center space-x-2 mx-auto hover:scale-105 transition-transform"
                                        >
                                            <span>Open Live Dashboard</span>
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    <footer className="bg-surface-container px-8 py-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 border-t border-surface-variant">
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">lock_open</span>
                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">No Password Required</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Encrypted Data</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="material-symbols-outlined text-primary text-2xl">send</span>
                            <span className="text-xs font-bold text-on-surface uppercase tracking-widest">Auto-Email Report</span>
                        </div>
                    </footer>
                </div>
            </main>

            <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
                    <div className="text-lg font-bold text-slate-900 dark:text-white mb-4 md:mb-0">Formally</div>
                    <div className="flex space-x-8">
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors" href="#">Support</a>
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors" href="#">Privacy Policy</a>
                        <a className="text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-blue-500 dark:hover:text-blue-300 uppercase tracking-wider transition-colors" href="#">Terms of Service</a>
                    </div>
                    <div className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-4 md:mt-0">
                        © 2026 Formally SaaS. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}