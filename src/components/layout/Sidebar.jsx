import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Activity,
  CalendarDays,
  Bell,
  Settings,
  HelpCircle,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Scans", path: "/scans", icon: Activity },
  { name: "Schedule", path: "/schedule", icon: CalendarDays },
];

const secondaryNavItems = [
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Support", path: "/support", icon: HelpCircle },
];

export const Sidebar = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div
        className={`fixed inset-0 z-20 bg-black/50 lg:hidden transition-opacity duration-200 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-background-cardLight dark:bg-background-cardDark border-r border-border-light dark:border-border-dark flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="h-16 flex items-center px-6 border-b border-border-light dark:border-border-dark">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary-teal flex items-center justify-center text-white text-4xl font-bold">
              •
            </div>
            <span className="text-xl font-bold">aps</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive
                      ? "bg-teal-50 text-primary-teal dark:bg-primary-teal/10 dark:text-primary-teal"
                      : "text-text-mutedLight dark:text-text-mutedDark"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-border-light dark:border-border-dark" />

          <nav className="flex flex-col gap-1">
            {secondaryNavItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive
                      ? "bg-teal-50 text-primary-teal dark:bg-primary-teal/10 dark:text-primary-teal"
                      : "text-text-mutedLight dark:text-text-mutedDark"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border-light dark:border-border-dark flex flex-col gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-text-mutedLight dark:text-text-mutedDark hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            Toggle Theme
          </button>

          <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded bg-primary-teal flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-light dark:text-white truncate">
                admin@edu.com
              </p>
              <p className="text-xs text-text-mutedLight dark:text-text-mutedDark truncate">
                Security Lead
              </p>
            </div>
            <LogOut className="w-4 h-4 text-text-mutedLight dark:text-text-mutedDark" />
          </div>
        </div>
      </aside>
    </>
  );
};
