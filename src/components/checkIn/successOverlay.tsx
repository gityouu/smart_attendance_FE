import React from "react";
import { SuccessOverlayProps } from "../../types/attendance";

export const SuccessOverlay: React.FC<SuccessOverlayProps> = ({ course }) => (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-8 text-center">
        <span className="material-symbols-outlined text-green-500 text-7xl mb-4">check_circle</span>
        <h2 className="text-3xl font-bold">Verified!</h2>
        <p className="mt-2 text-gray-600">Your attendance for {course || 'this course'} is logged.</p>
    </div>
);