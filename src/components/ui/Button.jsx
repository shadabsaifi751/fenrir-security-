import React from "react";

const variantStyles = {
  primary: "bg-primary-teal text-white hover:bg-primary-tealHover",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",
  outline:
    "border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
  ghost:
    "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
  social:
    "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-[#161a21] dark:border-gray-700 dark:text-white dark:hover:bg-gray-800",
  destructive:
    "bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 py-2 text-sm",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10",
};

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  children,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-ring disabled:opacity-50 disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
