"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import { siteConfig } from "@/config/site";

const carouselItems = [
  "SELF. CARE. CLUB.",
  "24/7 GYM ACCESS",
  "RECOVERY HUB",
  "BOXING & HYROX",
  "GROUP CLASSES",
  "PRIVATE ROOMS",
  "MEMBERSHIP",
];

interface HeroProps {
  title?: string;
  subtitle: string;
  showCTAs?: boolean;
  showPill?: boolean;
  showCarousel?: boolean;
}

export default function Hero({
  title,
  subtitle,
  showCTAs = true,
  showPill = false,
  showCarousel = false,
}: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!showCarousel) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [showCarousel]);

  return (
    <section
      className="grid-overlay relative flex min-h-[90vh] items-center overflow-hidden px-4"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-jet/70" />

      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[15%] left-[5%] h-56 w-56 rounded-full bg-purple/5 blur-3xl" />

      {/* Edge accent lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="max-w-4xl">
          {/* Pill tag */}
          {showPill && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Function Training Gym &mdash; Mitcham
            </div>
          )}

          {showCarousel ? (
            <div className="h-[1.2em] overflow-hidden text-6xl md:text-7xl lg:text-9xl">
              <h1
                className={`font-display tracking-wide text-white transition-all duration-500 ease-in-out ${
                  isAnimating
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                {carouselItems[currentIndex]}
              </h1>
            </div>
          ) : (
            <h1 className="font-display text-6xl leading-[1.05] tracking-wide md:text-7xl lg:text-9xl text-white">
              {title}
            </h1>
          )}

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            {subtitle}
          </p>

          {showCTAs && (
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={siteConfig.bookingUrl} size="lg" external>
                Book a Class
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                Join Now
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="ghost"
                size="lg"
              >
                Call Us
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
