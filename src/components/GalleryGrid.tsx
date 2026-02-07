"use client";

const galleryItems = [
  { label: "Training Floor", number: "01" },
  { label: "Gym Floor", number: "02" },
  { label: "Private Room", number: "03" },
  { label: "Group Class", number: "04" },
  { label: "Recovery", number: "05" },
  { label: "Community", number: "06" },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {galleryItems.map((item) => (
        <div
          key={item.label}
          className="card-futuristic group relative aspect-square overflow-hidden rounded-lg"
        >
          {/* Placeholder — replace with Next.js Image when photos are ready */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted transition-all duration-300 group-hover:text-white">
            <span className="font-heading text-3xl font-bold text-cyan/20 transition-colors duration-300 group-hover:text-cyan/40">
              {item.number}
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-widest">
              {item.label}
            </span>
          </div>
          {/* Hover gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
