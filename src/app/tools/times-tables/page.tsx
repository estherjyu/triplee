"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TABLES = Array.from({ length: 19 }, (_, i) => i + 2);
const DURATIONS = [30, 60, 120];

export default function TimesTablesSetup() {
  const router = useRouter();
  const [duration, setDuration] = useState(60);
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const [excludedMultipliers, setExcludedMultipliers] = useState<number[]>([]);

  function toggleTable(n: number) {
    setSelectedTables((prev) =>
      prev.includes(n) ? prev.filter((t) => t !== n) : [...prev, n]
    );
  }

  function toggleExclude(n: number) {
    setExcludedMultipliers((prev) =>
      prev.includes(n) ? prev.filter((t) => t !== n) : [...prev, n]
    );
  }

  function handleStart() {
    if (selectedTables.length === 0) return;
    const params = new URLSearchParams({
      duration: String(duration),
      tables: selectedTables.sort((a, b) => a - b).join(","),
    });
    if (excludedMultipliers.length > 0) {
      params.set(
        "exclude",
        excludedMultipliers.sort((a, b) => a - b).join(",")
      );
    }
    router.push(`/tools/times-tables/practice?${params.toString()}`);
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-10 w-full max-w-lg">
        <Link
          href="/tools"
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100"
        >
          times tables
        </Link>

        {/* Duration */}
        <div className="flex flex-col items-center gap-3 w-full">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            duration
          </span>
          <div className="flex gap-3">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`px-5 py-2 rounded text-sm transition-colors ${
                  duration === d
                    ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {d}s
              </button>
            ))}
          </div>
        </div>

        {/* Tables selector */}
        <div className="flex flex-col items-center gap-3 w-full">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            tables to practice
          </span>
          <div className="grid grid-cols-5 gap-2">
            {TABLES.map((n) => (
              <button
                key={n}
                onClick={() => toggleTable(n)}
                className={`w-12 h-10 rounded text-sm transition-colors ${
                  selectedTables.includes(n)
                    ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Exclude multipliers */}
        <div className="flex flex-col items-center gap-3 w-full">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            exclude multipliers
          </span>
          <div className="grid grid-cols-5 gap-2">
            {TABLES.map((n) => (
              <button
                key={n}
                onClick={() => toggleExclude(n)}
                className={`w-12 h-10 rounded text-sm transition-colors ${
                  excludedMultipliers.includes(n)
                    ? "bg-red-600 text-white dark:bg-red-500 dark:text-white"
                    : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Start */}
        <button
          onClick={handleStart}
          disabled={selectedTables.length === 0}
          className={`px-8 py-3 rounded text-lg transition-colors ${
            selectedTables.length > 0
              ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300"
              : "bg-zinc-300 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600 cursor-not-allowed"
          }`}
        >
          start
        </button>
      </div>
    </div>
  );
}
