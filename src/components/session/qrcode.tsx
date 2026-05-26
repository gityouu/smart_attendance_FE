import { QRCodeSVG } from "qrcode.react";

export default function QRCode() {
    const dummyScanUrl = "http://172.20.10.2:5173/student-check-in/preview-session?t=preview";

    return (
        <section className="flex-1 bg-surface-container-low dark:bg-neutral-950/60 p-8 lg:p-12 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-surface-container dark:border-neutral-800">
            <div className="text-center animate-in fade-in zoom-in duration-300">
                <div className="relative group inline-block">
                    <div className="bg-white p-4 rounded-2xl shadow-lg border border-transparent dark:border-neutral-700">
                        <QRCodeSVG
                            value={dummyScanUrl}
                            size={220}
                            level="H"
                            marginSize={4}
                        />
                    </div>

                    <button
                        type="button"
                        className="absolute -top-3 -right-3 bg-primary dark:bg-blue-600 text-on-primary text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-10"
                        title="Expand QR Code"
                    >
                        <span className="material-symbols-outlined text-2xl">fullscreen</span>
                    </button>
                </div>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400 font-bold">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                        <span>Session Live</span>
                    </div>
                    <p className="text-xs text-on-surface-variant dark:text-neutral-400 italic">Scan to test or proceed to dashboard</p>

                    <button
                        type="button"
                        className="px-6 py-2 bg-secondary dark:bg-blue-600 hover:dark:bg-blue-500 text-on-secondary text-white rounded-full font-bold flex items-center space-x-2 mx-auto hover:scale-105 active:scale-95 transition-transform"
                    >
                        <span>Open Live Dashboard</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
