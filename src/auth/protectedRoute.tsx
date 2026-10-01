import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSession } from "../lib/authClient";

export default function ProtectedRoute() {
    const { data: session, isPending } = useSession();
    const location = useLocation();

    // 1. Session verification in-flight: Show minimal full-screen loader
    if (isPending) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-surface dark:bg-neutral-950 text-neutral-900 dark:text-white">
            <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
            <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                Verifying Host Session...
            </span>
            </div>
            </div>
        );
    }

    // 2. Unauthenticated: Redirect to log in with previous path state
    if (!session?.user) {
        return <Navigate to="/prologin" state={{ from: location }} replace />;
    }

    // 3. Authenticated: Render protected nested routes
    return <Outlet />;
}
