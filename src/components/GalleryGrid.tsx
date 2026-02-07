"use client";

const galleryItems = [
  { alt: "Functional training space", label: "Training Floor" },
  { alt: "Gym equipment", label: "Gym Floor" },
  { alt: "Private training room", label: "Private Room" },
  { alt: "Group class session", label: "Group Class" },
  { alt: "Recovery room", label: "Recovery" },
  { alt: "Community event", label: "Community" },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {galleryItems.map((item) => (
        <div
          key={item.label}
          className="group relative aspect-square overflow-hidden rounded-lg bg-steel"
        >
          {/* Placeholder — replace with Next.js Image when photos are ready */}
          <div className="flex h-full w-full items-center justify-center bg-steel-light text-muted transition-colors duration-300 group-hover:bg-steel">
            <span className="font-heading text-sm font-bold uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-jet/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
