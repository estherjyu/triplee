import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <Link
        href="/menu"
        className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors cursor-pointer text-center px-6"
      >
        esther&apos;s eclectic exposition
      </Link>
    </div>
  );
}
