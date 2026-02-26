"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    const nextIndex = (current + 1) % images.length;
    setIsTransitioning(true);
    setCurrent(nextIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, images.length]);

  const prev = useCallback(() => {
    const prevIndex = (current - 1 + images.length) % images.length;
    setIsTransitioning(true);
    setCurrent(prevIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [current, images.length]);

  useEffect(() => {
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [next, autoPlayInterval]);

  if (images.length === 0) return null;

  // Each slide takes 70% width, with 15% peek on each side
  const slideWidth = 70;
  const gap = 2;
  const offset = (100 - slideWidth) / 2;
  const translateX = -(current * (slideWidth + gap)) + offset;

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Carousel viewport */}
      <div className="overflow-hidden rounded-xl">
        {/* Sliding track */}
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative shrink-0 aspect-[4/3]"
              style={{ width: `${slideWidth}%`, marginRight: `${gap}%` }}
            >
              <div
                className={`relative h-full w-full overflow-hidden rounded-lg border transition-all duration-500 ${
                  index === current
                    ? "border-white/20 scale-100 opacity-100"
                    : "border-steel scale-95 opacity-40"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain bg-jet-light"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 700px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-jet/70 p-2.5 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-jet/90 cursor-pointer z-10"
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
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-jet/70 p-2.5 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-jet/90 cursor-pointer z-10"
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
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-6 bg-white"
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-jet/70 px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
