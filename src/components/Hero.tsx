import Button from "./Button";
import { siteConfig } from "@/config/site";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTAs?: boolean;
}

export default function Hero({ title, subtitle, showCTAs = true }: HeroProps) {
  return (
    <section className="hero-gradient relative flex min-h-[85vh] items-center px-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-muted md:text-xl lg:text-2xl">
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
