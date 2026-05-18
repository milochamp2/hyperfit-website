import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop HyperFit merch — apparel and gear from our official store.",
};

export default function ShopPage() {
  return (
    <>
      <Hero
        title="HyperFit Merch"
        subtitle="Represent the gym. Shop our official apparel and gear."
        showCTAs={false}
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/70">
            Our official merch store is powered by Icon Sports. Browse and order
            HyperFit apparel, accessories, and gear — delivered straight to you.
          </p>
          <div className="mt-10">
            <Button
              href="https://melbourne.icon-sports.com.au/hyperfit"
              size="lg"
              external
            >
              Visit the HyperFit Store
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
