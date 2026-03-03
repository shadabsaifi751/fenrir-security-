import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Columns,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Chip } from "../components/ui/Chip";
import { scans } from "../mockData";

export const Scans = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = scans.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between flex-wrap gap-5 items-center">
        <div className="flex items-center flex-wrap text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">
            Scan
          </span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Private Assets</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-primary-teal font-medium">New Scan</span>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export Report</Button>
          <Button variant="destructive">Stop Scan</Button>
        </div>
      </div>

      <div className="md:bg-gray-50 dark:md:bg-[#161a21] sm:p-4 px-0 rounded-lg ">
        <div className="flex items-start flex-wrap gap-[25px] justify-between md:divide-x divide-gray-200 dark:divide-gray-800 md:border-0 border-b md:mb-0 mb-5 border-gray-200 dark:border-gray-800 pb-6 text-sm">
          <div className="sm:px-4 px-0 md:pr-4 md:pl-0 flex flex-col gap-1">
            <span className="text-gray-500">
              Org:{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                Project X
              </span>
            </span>
          </div>
          <div className="sm:px-4 px-0 flex flex-col gap-1">
            <span className="text-gray-500 text-center">
              Owner:{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                Nammagiri
              </span>
            </span>
          </div>
          <div className="sm:px-4 px-0 flex gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 text-center">
                Total Scans:{" "}
                <span className="font-medium text-gray-900 dark:text-white">
                  100
                </span>
              </span>
            </div>
          </div>
          <div className="sm:px-4 px-0 flex flex-col gap-1">
            <span className="text-gray-500     text-center">
              Scheduled:{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                1000
              </span>
            </span>
          </div>
          <div className="sm:px-4 px-0 flex flex-col gap-1">
            <span className="text-gray-500     text-center">
              Rescans:{" "}
              <span className="font-medium text-gray-900 dark:text-white">
                100
              </span>
            </span>
          </div>
          <div className="sm:px-4 px-0 flex flex-wrap gap-4 justify-between items-center col-span-2 md:col-span-2">
            <span className="text-gray-500 text-center">
              Failed Scans: <span className="font-medium">100</span>
            </span>
            <div className="flex items-center gap-1 text-primary-teal bg-primary-teal/10 px-2 py-0.5 rounded ml-auto">
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              10 mins ago
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-20 pb-4">
          <div className="flex flex-col gap-2 relative">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                Critical Severity
              </span>
              <div className="w-6 h-6 rounded bg-red-100 text-red-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
            </div>
            <div className="flex items-end gap-2 text-red-500">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                86
              </span>
              <span className="text-xs mb-1 font-medium flex items-center">
                ↑ +2% increase than yesterday
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                High Severity
              </span>
              <div className="w-6 h-6 rounded bg-orange-100 text-orange-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
            </div>
            <div className="flex items-end gap-2 text-red-500">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                16
              </span>
              <span className="text-xs mb-1 font-medium flex items-center">
                ↑ +0.9% increase than yesterday
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                Medium Severity
              </span>
              <div className="w-6 h-6 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
            </div>
            <div className="flex items-end gap-2 text-green-500">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                26
              </span>
              <span className="text-xs mb-1 font-medium flex items-center">
                ↓ +0.9% decrease than yesterday
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                Low Severity
              </span>
              <div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="flex items-end gap-2 text-red-500">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                16
              </span>
              <span className="text-xs mb-1 font-medium flex items-center">
                ↑ +0.9% increase than yesterday
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-[#161a21] border border-gray-200 dark:border-gray-800 rounded-lg overflow-x-auto">
        <div className="flex flex-col w-full sm:flex-row gap-3 bg-gray-50 dark:bg-[#161a21] p-5">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search scans by name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded bg-white dark:bg-[#161a21] border border-gray-200 dark:border-gray-800 text-sm focus:outline-none focus:border-primary-teal transition-colors text-gray-900 dark:text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
            <Button
              variant="social"
              className="h-10 sm:px-4 px-3 text-sm gap-2"
            >
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <Button
              variant="social"
              className="h-10 sm:px-4 px-3 text-sm gap-2"
            >
              <Columns className="w-4 h-4" /> Column
            </Button>
            <Button className="h-10 sm:px-4 px-3 text-sm gap-2">
              <Plus className="w-4 h-4 sm:visible hidden" /> New scan
            </Button>
          </div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50/50 dark:bg-[#161a21] border-b border-gray-100 dark:border-gray-800">
            <tr>
              <th className="px-6 py-4 font-medium tracking-wider">
                Scan Name
              </th>
              <th className="px-6 py-4 font-medium tracking-wider">Type</th>
              <th className="px-6 py-4 font-medium tracking-wider">Status</th>
              <th className="px-6 py-4 font-medium tracking-wider">Progress</th>
              <th className="px-6 py-4 font-medium tracking-wider text-right">
                Vulnerability
              </th>
              <th className="px-6 py-4 font-medium tracking-wider text-right">
                Last Scan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-gray-400 dark:text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">
                      No records found
                    </span>
                  </div>
                </td>
              </tr>
            ) : (
              filtered.map((scan) => (
                <tr
                  key={scan.id}
                  onClick={() => navigate(`/scans/${scan.id}`)}
                  className="hover:bg-gray-50 dark:hover:bg-[#161a21] transition-colors cursor-pointer group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {scan.name}
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                    {scan.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Chip status={scan.status}>
                      {scan.status.charAt(0).toUpperCase() +
                        scan.status.slice(1)}
                    </Chip>
                  </td>
                  <td className="px-6 py-4 min-w-[150px]">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${scan.status === "failed" ? "bg-red-500" : "bg-primary-teal"}`}
                          style={{ width: `${scan.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 w-9">
                        {scan.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-1.5">
                      {scan.vulnerabilities.critical > 0 && (
                        <Badge
                          variant="critical"
                          className="w-7 justify-center"
                        >
                          {scan.vulnerabilities.critical}
                        </Badge>
                      )}
                      {scan.vulnerabilities.high > 0 && (
                        <Badge variant="high" className="w-7 justify-center">
                          {scan.vulnerabilities.high}
                        </Badge>
                      )}
                      {scan.vulnerabilities.medium > 0 && (
                        <Badge variant="medium" className="w-7 justify-center">
                          {scan.vulnerabilities.medium}
                        </Badge>
                      )}
                      {scan.vulnerabilities.low > 0 && (
                        <Badge variant="low" className="w-7 justify-center">
                          {scan.vulnerabilities.low}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-500 whitespace-nowrap">
                    {scan.lastScan}
                  </td>
                </tr>
              ))
            )}
            <tr>
              <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                showing {filtered.length} of {scans.length} scans
              </td>
              <td
                colSpan={5}
                className="px-2 py-2 text-right text-gray-500 whitespace-nowrap"
              >
                <button className="p-1 text-gray-500 border border-gray-200 dark:border-gray-800 rounded mr-3">
                  <ChevronLeft />
                </button>
                <button className="p-1 text-gray-500 border border-gray-200 dark:border-gray-800 rounded">
                  <ChevronRight />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
