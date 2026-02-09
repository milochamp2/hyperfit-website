import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { siteConfig, services } from "@/config/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HyperFit's services — functional group training, open gym, personal training, recovery sessions, and private room bookings in Mitcham.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services Built for Results"
        subtitle="From high-energy group classes to private one-on-one coaching — find the training that fits your goals."
        showCTAs={false}
      />

      <Section>
        <SectionHeading
          title="Our Services"
          subtitle="Everything you need under one roof at HyperFit Mitcham."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Book a free introductory session and we&apos;ll help you find the
            right training for your goals and fitness level.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Book a Free Trial
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
