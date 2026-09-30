import React from 'react';
import TopNav from "../components/pro/dashboard/topNav";
import ActionArea from "../components/pro/dashboard/actionArea";
import KPIs from "../components/pro/dashboard/KPIs";
import History from "../components/pro/dashboard/History";

export default function ProDashboard() {
  return (
      <div className="min-h-screen bg-[#fcf9f8] dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-body transition-colors duration-200 flex flex-col">
          {/*A. Global Navigation Bar (Top)*/}
          <TopNav />

        {/* Main Container */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-6 space-y-8">
          {/*B. Quick Session Launcher (Action Area)*/}
          <ActionArea />

          {/*C. Live Stage Shortcut & Anti-Proxy Summary (KPIs)*/}
          <KPIs />

          {/*D. Persistent Session History & Export Center*/}
          <History />
        </main>

      {/* Footer */}

    </div>
  );
}
