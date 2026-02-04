import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "/photos/placeholder.jpg",
    alt: "Photo 1",
    caption: "Add your first photo",
  },
];

export default function Photoblog() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
          Photoblog
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
          A collection of moments captured.
        </p>

        <div className="grid gap-8">
          {photos.map((photo) => (
            <article
              key={photo.id}
              className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
            >
              <div className="aspect-[4/3] relative bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                <p className="text-zinc-400">Add photos to /public/photos/</p>
              </div>
              <div className="p-4">
                <p className="text-zinc-600 dark:text-zinc-400">
                  {photo.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
