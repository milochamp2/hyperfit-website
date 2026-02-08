import Image from "next/image";

const galleryItems = [
  {
    label: "Training Floor",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop&crop=center",
    alt: "Functional training gym floor with equipment",
  },
  {
    label: "Gym Floor",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=600&fit=crop&crop=center",
    alt: "Fully equipped gym with free weights and machines",
  },
  {
    label: "Private Room",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop&crop=center",
    alt: "Private training room session",
  },
  {
    label: "Group Class",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=600&fit=crop&crop=center",
    alt: "High energy group fitness class",
  },
  {
    label: "Recovery",
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop&crop=center",
    alt: "Recovery and mobility stretching session",
  },
  {
    label: "Community",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=600&fit=crop&crop=center",
    alt: "Gym community members training together",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {galleryItems.map((item) => (
        <div
          key={item.label}
          className="group relative aspect-square overflow-hidden rounded-lg"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-jet/80 via-jet/20 to-transparent" />
          {/* Label */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-white/90">
              {item.label}
            </span>
          </div>
          {/* Hover brightening */}
          <div className="pointer-events-none absolute inset-0 bg-cyan/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      ))}
    </div>
  );
}
