import Link from "next/link";

export default function Menu() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8"
        >
          esther&apos;s eclectic exposition
        </Link>

        <nav className="flex flex-col items-center gap-6">
          <Link
            href="/about"
            className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            about
          </Link>
          <Link
            href="/photoblog"
            className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            photoblog
          </Link>
          <Link
            href="/recommendations"
            className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            recommendations
          </Link>
          <Link
            href="/tools"
            className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            tools
          </Link>
        </nav>
      </div>
    </div>
  );
}
