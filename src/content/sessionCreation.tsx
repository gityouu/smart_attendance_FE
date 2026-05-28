import React from 'react';
import Form from "../components/session/form";
import QRCode from "../components/session/qrcode";
import SessionFooter from "../components/session/footer";

export default function SessionCreation() {

    return (
        <div className="bg-surface dark:bg-neutral-950 text-on-surface dark:text-neutral-100 overflow-hidden flex flex-col transition-colors duration-200">
            <main className="grow flex items-center justify-center p-4 pb-9.75! md:p-10 lg:p-19">
                <div className="w-full max-w-5xl bg-surface-container-lowest dark:bg-neutral-900 rounded-xl shadow-[0_40px_100px_-20px_rgba(28,27,27,0.06)] dark:shadow-black/60 border border-transparent dark:border-neutral-800 overflow-hidden flex flex-col">
                    <div className="flex flex-col md:flex-row">

                        {/* Form Section */}
                        <Form />

                        {/* QR Placeholder / Active Section */}
                        <QRCode />
                    </div>
                </div>
            </main>

            {/* Bottom Footer */}
            <SessionFooter />
        </div>
    );
}