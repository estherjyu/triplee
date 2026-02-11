import Link from "next/link";

export default function Tools() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <Link
          href="/menu"
          className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8"
        >
          tools
        </Link>

        <nav className="flex flex-col items-center gap-6">
          <Link
            href="/tools/times-tables"
            className="text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            times tables
          </Link>
        </nav>
      </div>
    </div>
  );
}
