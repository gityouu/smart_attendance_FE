import React from 'react';
import { CheckInFormProps } from "../../types/attendance";

export default function CheckInForm({ audience = 'school', studentId, fullName, onStudentIdChange, onFullNameChange
                                    }: CheckInFormProps) {
    const isCorporate = audience === 'corporate';

    return (
        <section className="space-y-5">
            {/* 1. Corporate Mode: Full Name (Mandatory) */}
            {isCorporate && (
                <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 px-1" htmlFor="full_name">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="full_name"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => onFullNameChange(e.target.value)}
                        className="w-full h-12 px-4 bg-gray-100 dark:bg-neutral-800 border border-transparent dark:border-neutral-700 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                        placeholder="e.g. Sarah Jenkins"
                    />
                </div>
            )}

            {/* 2. Identifier Input */}
            {/* - If School: Student ID only (Mandatory) */}
            {/* - If Corporate: Staff / Badge ID (Optional) */}
            <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 px-1" htmlFor="identifier">
                    {isCorporate ? (
                        <>Staff ID / Badge # <span className="text-[10px] text-neutral-400 font-normal lowercase">(optional)</span></>
                    ) : (
                        <>Student ID <span className="text-red-500">*</span></>
                    )}
                </label>
                <input
                    id="identifier"
                    type="text"
                    required={!isCorporate}
                    value={studentId}
                    onChange={(e) => onStudentIdChange(e.target.value)}
                    className="w-full h-12 px-4 bg-gray-100 dark:bg-neutral-800 border border-transparent dark:border-neutral-700 rounded-xl text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder={isCorporate ? "e.g. EMP-9021 (optional)" : "e.g. 10928374"}
                />
            </div>

            {/* Verification Notice */}
            <div className="flex items-start gap-3 p-3.5 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/50 dark:border-neutral-800">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg mt-0.5">
                    verified_user
                </span>
                <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    Your physical presence and device hardware are automatically verified to prevent proxy check-ins.
                </p>
            </div>
        </section>
    );
}

