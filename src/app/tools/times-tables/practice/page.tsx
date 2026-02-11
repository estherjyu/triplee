"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, Suspense } from "react";

function generateProblem(
  tables: number[],
  multipliers: number[],
  previous?: { a: number; b: number }
): { a: number; b: number; answer: number } {
  let a: number, b: number;
  do {
    b = tables[Math.floor(Math.random() * tables.length)];
    a = multipliers[Math.floor(Math.random() * multipliers.length)];
  } while (previous && a === previous.a && b === previous.b);
  return { a, b, answer: a * b };
}

function PracticeSession() {
  const searchParams = useSearchParams();
  const duration = Number(searchParams.get("duration")) || 60;
  const tables = (searchParams.get("tables") || "")
    .split(",")
    .map(Number)
    .filter((n) => n >= 2 && n <= 20);
  const excluded = (searchParams.get("exclude") || "")
    .split(",")
    .map(Number)
    .filter((n) => n >= 2 && n <= 20);

  const allMultipliers = Array.from({ length: 19 }, (_, i) => i + 2);
  const multipliers = allMultipliers.filter((n) => !excluded.includes(n));

  const [timeLeft, setTimeLeft] = useState(duration);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [problem, setProblem] = useState(() =>
    generateProblem(tables, multipliers)
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const previousRef = useRef<{ a: number; b: number } | undefined>(undefined);
  const scoreRef = useRef(0);

  // Start on first keystroke
  const handleStart = useCallback(() => {
    if (!started) setStarted(true);
  }, [started]);

  // Timer
  useEffect(() => {
    if (!started || finished) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [started, finished]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Check answer on input change
  function handleInput(value: string) {
    // Only allow digits
    const cleaned = value.replace(/\D/g, "");
    setInput(cleaned);
    handleStart();

    if (cleaned === String(problem.answer)) {
      const newScore = scoreRef.current + 1;
      scoreRef.current = newScore;
      setScore(newScore);
      previousRef.current = { a: problem.a, b: problem.b };
      const next = generateProblem(tables, multipliers, previousRef.current);
      setProblem(next);
      setInput("");
    }
  }

  // Invalid config
  if (tables.length === 0 || multipliers.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            invalid configuration
          </p>
          <Link
            href="/tools/times-tables"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            go back
          </Link>
        </div>
      </div>
    );
  }

  // Restart with same settings
  function restart() {
    setTimeLeft(duration);
    setScore(0);
    scoreRef.current = 0;
    setInput("");
    setStarted(false);
    setFinished(false);
    previousRef.current = undefined;
    setProblem(generateProblem(tables, multipliers));
  }

  // Listen for Enter on results screen
  useEffect(() => {
    if (!finished) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Enter") restart();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  // Results screen
  if (finished) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <span className="text-6xl md:text-8xl font-bold text-zinc-900 dark:text-zinc-100">
            {scoreRef.current}
          </span>
          <span className="text-xl text-zinc-500 dark:text-zinc-400">
            correct
          </span>
          <span className="text-sm text-zinc-400 dark:text-zinc-500 mt-8">
            press enter to restart
          </span>
          <Link
            href="/tools/times-tables"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            change settings
          </Link>
        </div>
      </div>
    );
  }

  // Practice screen
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center relative">
      {/* Timer */}
      <div className="absolute top-6 right-6 text-2xl font-mono text-zinc-400 dark:text-zinc-500">
        {timeLeft}
      </div>

      {/* Score */}
      <div className="absolute top-6 left-6 text-2xl font-mono text-zinc-400 dark:text-zinc-500">
        {score}
      </div>

      {/* Problem */}
      <div className="flex items-center gap-4">
        <span className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
          {problem.a} &times; {problem.b} =
        </span>
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={input}
          onChange={(e) => handleInput(e.target.value)}
          className="text-4xl md:text-6xl font-bold w-32 md:w-40 bg-transparent border-b-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 outline-none text-center"
          autoFocus
        />
      </div>
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
          <span className="text-zinc-400">loading...</span>
        </div>
      }
    >
      <PracticeSession />
    </Suspense>
  );
}
