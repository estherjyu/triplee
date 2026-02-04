import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Welcome to Triple E
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          A personal space for photos and recommendations.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/photoblog"
            className="block p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Photoblog
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Browse through my photo collection.
            </p>
          </Link>

          <Link
            href="/recommendations"
            className="block p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Recommendations
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Things I love and recommend.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
