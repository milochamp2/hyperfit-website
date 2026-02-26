"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  autoPlayInterval?: number;
}

export default function ImageSlider({
  images,
  autoPlayInterval = 4000,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, images.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + images.length) % images.length);
  }, [current, images.length, goTo]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  if (images.length === 0) return null;

  return (
    <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl border border-steel">
      {/* Slides container */}
      <div className="relative aspect-[16/9] w-full bg-jet-light">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="absolute inset-0 transition-all duration-600 ease-in-out"
            style={{
              transform: `translateX(${(index - current) * 100}%)`,
              opacity: index === current ? 1 : 0.5,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 896px"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlays for edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-jet/20 via-transparent to-jet/20" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-jet/40 to-transparent" />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-jet/60 p-2 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-jet/80 cursor-pointer"
        aria-label="Previous image"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-jet/60 p-2 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-jet/80 cursor-pointer"
        aria-label="Next image"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-jet/60 px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
