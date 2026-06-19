import React from 'react';
import { CheckInFormProps } from "../../types/attendance";

export default function CheckInForm({ studentId, fullName, onStudentIdChange, onFullNameChange }: CheckInFormProps) {
    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface dark:text-neutral-200 px-1" htmlFor="student_id">
                    Student ID
                </label>
                <input
                    id="student_id"
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => onStudentIdChange(e.target.value)}
                    className="w-full h-14 px-4 bg-gray-100 dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 rounded-xl text-on-surface dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="e.g. STU-10928"
                />
            </div>

            <div className="space-y-2">
                <label className="font-label text-sm font-semibold text-on-surface dark:text-neutral-200 px-1" htmlFor="full_name">
                    Full Name
                </label>
                <input
                    id="full_name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => onFullNameChange(e.target.value)}
                    className="w-full h-14 px-4 bg-gray-100 dark:bg-neutral-800 border-0 dark:border dark:border-neutral-700 rounded-xl text-on-surface dark:text-white placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder="e.g. Sarah Jenkins"
                />
            </div>

            <div className="flex items-start gap-4 p-4 bg-surface-container-low/50 dark:bg-neutral-900 rounded-2xl border border-outline-variant/10 dark:border-neutral-800">
                <div className="shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-primary dark:text-blue-400 text-xl" data-icon="location_on">
            location_on
          </span>
                </div>
                <p className="text-xs leading-relaxed text-on-surface-variant dark:text-neutral-400">
                    By checking in, your current location and device ID will be verified for attendance validity.{' '}
                    <a className="text-primary dark:text-blue-400 font-semibold underline underline-offset-2" href="#">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </section>
    );
}

