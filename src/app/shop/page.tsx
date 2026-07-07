import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import HapanaWidget from "@/components/HapanaWidget";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop HyperFit merch, gift cards, and gear from our official store.",
};

export default function ShopPage() {
  return (
    <>
      <Hero
        title="HyperFit Shop"
        subtitle="Gift cards, merch, and gear — all in one place."
        showCTAs={false}
      />

      {/* Gift Cards */}
      <div id="gift-cards" className="bg-gradient-to-b from-steel to-jet-light px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Gift Cards"
            subtitle="Give the gift of training. Perfect for birthdays, milestones, or anyone ready to start their fitness journey."
            gradient
          />
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-2xl md:p-10">
            <HapanaWidget type="giftCards" />
          </div>
        </div>
      </div>

      {/* Merch */}
      <Section>
        <SectionHeading
          title="HyperFit Merch"
          subtitle="Represent the gym. Shop our official apparel and gear."
          gradient
        />
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
