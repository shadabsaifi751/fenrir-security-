import React from "react";

const severityStyles = {
  critical: "bg-severity-critical text-white",
  high: "bg-severity-high text-white",
  medium: "bg-severity-medium text-white",
  low: "bg-severity-low text-white",
  neutral: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
};

export function Badge({
  children,
  variant = "neutral",
  className = "",
  ...props
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${severityStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
