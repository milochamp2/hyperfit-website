import Button from "./Button";
import { siteConfig } from "@/config/site";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTAs?: boolean;
}

export default function Hero({ title, subtitle, showCTAs = true }: HeroProps) {
  return (
    <section className="hero-gradient grid-overlay relative flex min-h-[90vh] items-center overflow-hidden px-4">
      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-cyan/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[15%] left-[5%] h-56 w-56 rounded-full bg-purple/5 blur-3xl" />

      {/* Edge accent lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {/* Pill tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
            Function Training Gym &mdash; Mitcham
          </div>

          <h1 className="text-gradient font-heading text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
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

          {/* Stats row */}
          {showCTAs && (
            <div className="mt-16 flex flex-wrap gap-8 border-t border-cyan/10 pt-8">
              {[
                { value: "3", label: "Private Rooms" },
                { value: "500+", label: "Members" },
                { value: "50+", label: "Classes / Week" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl font-bold text-cyan md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
