import Link from "next/link";

const recommendations = [
  {
    id: 1,
    category: "youtube videos",
    items: [
      { name: "Add your first book recommendation", description: "" },
    ],
  },
  {
    id: 2,
    category: "books",
    items: [
      { name: "Add your first movie recommendation", description: "" },
    ],
  },
  {
    id: 3,
    category: "movies",
    items: [
      { name: "Add your first music recommendation", description: "" },
    ],
  },
  {
    id: 4,
    category: "music",
    items: [
      { name: "Add your first music recommendation", description: "" },
    ],
  },
  {
    id: 5,
    category: "other",
    items: [
      { name: "Add your first music recommendation", description: "" },
    ],
  },
];

export default function Recommendations() {
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
          Recommendations
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          let's try critical thinking!
        </p>

        <div className="space-y-12">
          {recommendations.map((section) => (
            <section key={section.id}>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800"
                  >
                    <h3 className="font-medium text-zinc-900 dark:text-zinc-100">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
