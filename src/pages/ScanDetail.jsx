import React, { useState, useRef, useEffect } from "react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { activityLog, findings } from "../mockData";

const STEP_ICONS = {
  Spidering: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="16.5" y1="16.5" x2="22" y2="22" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="11" y1="8" x2="11" y2="14" />
    </svg>
  ),
  Mapping: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  Testing: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4" />
      <path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2H9V3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Validating: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Reporting: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
};

const STEPS = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];

const LogEntry = ({ log }) => {
  const parts = [];

  parts.push(
    <span key="ts" className="text-gray-400 dark:text-gray-500">
      [{log.time}]
    </span>,
  );
  parts.push(" ");

  if (log.text) {
    const lines = log.text.split("\n");
    lines.forEach((line, i) => {
      const trimmed = line.trimStart();
      if (trimmed.startsWith("|") || trimmed.startsWith("-  ")) {
        parts.push(
          <span
            key={`pre${i}`}
            className="block pl-4 my-0.5 border-l-2 border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-500 text-[11.5px]"
          >
            {line.replace(/^\s*\|?\s*/, "").trim()}
          </span>,
        );
      } else {
        if (i > 0) parts.push(<br key={`br${i}`} />);
        parts.push(<span key={`t${i}`}>{line}</span>);
      }
    });
  }

  if (log.link)
    parts.push(
      <a key="link" href="#0" className="text-primary-teal hover:underline">
        {log.link}
      </a>,
    );
  if (log.highlight)
    parts.push(
      <span key="hl" className="text-blue-500 dark:text-blue-400">
        {log.highlight}
      </span>,
    );
  if (log.endpoint)
    parts.push(
      <span
        key="ep"
        className="bg-gray-200 dark:bg-[#2a2a2a] px-1.5 py-0.5 rounded font-mono text-[11px] text-gray-800 dark:text-gray-200"
      >
        {log.endpoint}
      </span>,
    );
  if (log.highlightDanger)
    parts.push(
      <span key="hd" className="text-red-500 font-bold">
        {log.highlightDanger}
      </span>,
    );
  if (log.postText) {
    const postLines = log.postText.split("\n");
    postLines.forEach((line, i) => {
      if (i > 0) parts.push(<br key={`pb${i}`} />);
      parts.push(<span key={`pt${i}`}>{line}</span>);
    });
  }
  if (log.postText2) parts.push(<span key="pt2">{log.postText2}</span>);

  return (
    <div className="text-gray-700 dark:text-gray-300 leading-[1.75]">
      {parts}
    </div>
  );
};

export const ScanDetail = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-3 shrink-0">
        <div className="flex items-center text-sm flex-wrap gap-0.5">
          <span className="font-semibold text-gray-900 dark:text-white">
            Scan
          </span>
          <span className="mx-1.5 text-gray-400">/</span>
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9,22 9,12 15,12 15,22" />
          </svg>
          <span className="mx-1.5 text-gray-400">/</span>
          <span className="text-gray-500">Private Assets</span>
          <span className="mx-1.5 text-gray-400">/</span>
          <span className="text-primary-teal font-medium">New Scan</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 px-4">
            Export Report
          </Button>
          <Button variant="destructive" size="sm" className="h-9 px-4">
            Stop Scan
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-[#161a21] border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-5 shrink-0">
        <div className="flex flex-col md:flex-row gap-5 md:gap-5 items-start md:items-center">
          <div className="pr-10 md:border-r border-gray-200 dark:border-gray-800">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <div className="absolute inset-[10px] rounded-full bg-[#1e2028] dark:bg-[#111] flex flex-col items-center justify-center shadow-inner">
                <span className="text-2xl sm:text-3xl font-bold text-primary-teal leading-none">
                  0%
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">
                  In Progress
                </span>
              </div>
            </div>
             
          </div>

          <div className="flex-1 w-full md:ps-5">
            <div className="overflow-x-auto ps-4 pb-1 mb-5">
              <div className="flex items-start justify-between min-w-[400px] pt-4 pb-0 relative">
                <div className="absolute top-1/2 sm:top-1/2 left-0 w-full -translate-y-1/2 h-px bg-gray-200 dark:bg-gray-800" />
                {STEPS.map((step, idx) => (
                  <div
                    key={step}
                    className="flex flex-col items-center gap-1.5 relative z-10"
                  >
                    <div className="relative">
                      {idx === 0 && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping opacity-20"
                          style={{
                            backgroundColor: "#14b8a6",
                            animationDuration: "2.5s",
                          }}
                        />
                      )}
                      {idx === 0 && (
                        <div
                          className="absolute -inset-1 rounded-full opacity-10"
                          style={{ backgroundColor: "#14b8a6" }}
                        />
                      )}
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                          idx === 0
                            ? "border-primary-teal bg-primary-teal text-white shadow-md shadow-primary-teal/30"
                            : "border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0f13] text-gray-400"
                        }`}
                      >
                        {STEP_ICONS[step]}
                      </div>
                    </div>

                    <span
                      className={`text-[10px] sm:text-[11px] font-medium text-center leading-tight ${idx === 0 ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              {[
                { label: "Scan Type", value: "Grey Box", plain: true },
                { label: "Targets", value: "google.com", plain: true },
                { label: "Started At", value: "Nov 22, 09:00AM", plain: true },
                { label: "Credentials", value: "2 Active", plain: true },
                { label: "Files", value: "Control.pdf", plain: true },
                { label: "Checklists", value: "40/350", plain: false },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] text-gray-400 mb-0.5">{m.label}</p>
                  <p
                    className={`font-semibold text-sm ${m.plain ? "text-gray-900 dark:text-white" : "text-primary-teal"}`}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-0 overflow-hidden border border-gray-200 dark:border-gray-800 rounded-xl lg:min-h-0">
        <div className="flex justify-between items-center px-4 h-11 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-primary-teal animate-pulse" />
            <span className="font-semibold text-sm text-gray-900 dark:text-white">
              Live Scan Console
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-400 border border-gray-200 dark:border-gray-700 rounded px-2 py-0.5">
              <svg
                className="w-3 h-3 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Running...
            </span>
          </div>
          <div className="flex gap-1">
            <button
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Minimize"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
            <button
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Close"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto] min-w-0 bg-white dark:bg-[#0a0f13]">
          <div className="border-r border-gray-200 dark:border-gray-800">
            <div className="flex gap-1 px-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
              {[
                { id: "activity", label: "Activity Log" },
                { id: "loops", label: "Verification Loops" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`py-2.5 px-1 mr-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === t.id
                      ? "border-primary-teal text-primary-teal"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div
              ref={logRef}
              className="flex-1 p-4 overflow-y-auto bg-white dark:bg-[#0a0f13] font-mono text-[12.5px] min-h-0"
            >
              {activeTab === "activity" ? (
                <div className="space-y-3">
                  {activityLog.map((log, i) => (
                    <LogEntry key={i} log={log} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 font-sans gap-2 py-12">
                  <svg
                    className="w-10 h-10 text-gray-300 dark:text-gray-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <p className="text-sm">No verification loops recorded yet.</p>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[320px] xl:w-[360px] flex flex-col shrink-0 min-h-[250px] lg:min-h-0">
            <div className="flex border-b border-gray-200 dark:border-gray-800 justify-between items-center px-0.5 shrink-0 h-[43px]">
              <p className="font-semibold text-sm text-gray-900 px-4 dark:text-white">
                Finding Log
              </p>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto space-y-3 p-4">
              {findings.map((f) => (
                <div
                  key={f.id}
                  className="bg-white dark:bg-[#161a21] border border-gray-200 dark:border-gray-800 rounded-xl p-4 cursor-pointer hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant={f.severity}>
                      {f.severity.charAt(0).toUpperCase() + f.severity.slice(1)}
                    </Badge>
                    <span className="text-[11px] text-gray-400 tabular-nums">
                      {f.time}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug mb-1">
                    {f.title}
                  </h3>
                  <p className="text-primary-teal text-xs font-mono mb-2">
                    {f.endpoint}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-wrap py-2 md:py-0 justify-center md:justify-between border-t border-gray-200 dark:border-gray-800 px-4 flex items-center gap-4 text-xs font-medium text-gray-500 shrink-0 bg-white dark:bg-[#161a21]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            Sub-Agents: 0
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Parallel Executions: 2
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-teal" />
            Operations: 1
          </div>
          <div className="md:ml-auto flex items-center gap-3">
            <span className="text-red-500 font-semibold">Critical: 0</span>
            <span className="text-orange-500 font-semibold">High: 0</span>
            <span className="text-yellow-500 font-semibold">Medium: 0</span>
            <span className="text-green-500 font-semibold">Low: 0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
