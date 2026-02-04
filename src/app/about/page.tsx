import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/menu"
          className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          &larr; back to menu
        </Link>

        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-6">
          About
        </h1>

        <div className="prose dark:prose-invert">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Welcome to my corner of the internet. This is where I share my photos and recommendations.
          </p>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 mt-4">
            Add more about yourself here...
          </p>
        </div>
      </div>
    </div>
  );
}
