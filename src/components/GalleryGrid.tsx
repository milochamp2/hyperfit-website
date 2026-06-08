import Image from "next/image";

const galleryItems = [
  {
    label: "Training Floor",
    src: "/image%20gallery/img1.jpg",
    alt: "HyperFit training floor with cyan neon lighting",
  },
  {
    label: "Functional Training",
    src: "/image%20gallery/img2.jpg",
    alt: "ZIVA rowers and ski ergs on the functional training floor",
  },
  {
    label: "Strength Zone",
    src: "/image%20gallery/img3.jpg",
    alt: "ZIVA squat racks loaded with coloured bumper plates",
  },
  {
    label: "The Den",
    src: "/image%20gallery/img4.jpg",
    alt: "Wide view of The Den training floor with cardio equipment",
  },
  {
    label: "Gym Floor",
    src: "/image%20gallery/img5.jpg",
    alt: "Dumbbell racks and benches with Self Care Club neon sign",
  },
  {
    label: "The Hyper Chamber",
    src: "/image%20gallery/img6.jpg",
    alt: "The Hyper Chamber boxing room with agility track and speed bags",
  },
  {
    label: "Boxing Room",
    src: "/image%20gallery/img7.jpg",
    alt: "Boxing room with STING heavy bags and neon strip lighting",
  },
  {
    label: "Infrared Sauna",
    src: "/image%20gallery/img8.jpg",
    alt: "Infrared sauna glowing red in the Mitcham Recovery Hub",
  },
  {
    label: "Recovery Hub",
    src: "/image%20gallery/img9.jpg",
    alt: "Recovery Hub amenities including ice machine and shower",
  },
  {
    label: "Recovery Amenities",
    src: "/image%20gallery/img10.jpg",
    alt: "HyperFit recovery room amenities",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
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
