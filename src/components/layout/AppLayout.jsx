import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sidebar } from "./Sidebar";

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        <header className="h-16 border-b border-border-light dark:border-border-dark bg-background-cardLight dark:bg-background-cardDark flex items-center px-4 lg:px-8 shrink-0 lg:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="ml-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary-teal flex items-center justify-center text-white text-[40px] leading-none font-bold">
              •
            </div>
            <span className="font-bold">aps</span>
          </Link>
        </header>

        <main className="flex-1 overflow-x-hidden p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
