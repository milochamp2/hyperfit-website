"use client";

import Button from "./Button";
import { siteConfig } from "@/config/site";

interface HeroProps {
  title?: string;
  subtitle: string;
  showCTAs?: boolean;
  showPill?: boolean;
  showMarquee?: boolean;
}

export default function Hero({
  title,
  subtitle,
  showCTAs = true,
  showPill = false,
  showMarquee = false,
}: HeroProps) {
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

      <div className="relative z-10 w-full">
        {/* Pill tag */}
        {showPill && (
          <div className="mx-auto max-w-7xl px-4 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Function Training Gym &mdash; Mitcham
            </div>
          </div>
        )}

        {showMarquee ? (
          <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden">
            <div className="marquee-track flex whitespace-nowrap">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="font-display text-2xl font-semibold tracking-[0.15em] text-white/80 md:text-3xl mx-10 shrink-0"
                >
                  SELF. CARE. CLUB.
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl">
            <h1 className="font-display text-6xl font-bold leading-[1.05] md:text-7xl lg:text-9xl text-white">
              {title}
            </h1>
          </div>
        )}

        <div className="mx-auto max-w-7xl mt-6">
          <p className="max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
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
