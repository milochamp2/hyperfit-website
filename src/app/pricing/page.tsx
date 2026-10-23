import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";
import { siteConfig, pricingPlans, classPasses } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "HyperFit pricing — Hyper Train $45/week, Hyper Elite $55/week, Hyper Recover $55/week, plus class passes from $22. Simple, transparent pricing in Mitcham.",
};

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Three memberships. Flexible class passes. No hidden fees."
        showCTAs={false}
      />

      <Section>
        <SectionHeading
          title="Membership Plans"
          subtitle="Choose the membership that fits your training and recovery goals."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Section>

      {/* Class Passes */}
      <Section dark>
        <SectionHeading
          title="Class Passes"
          subtitle="No membership needed. Drop in or grab a pack."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {classPasses.map((pass) => (
            <div key={pass.name} className="card-futuristic rounded-xl p-6 text-center transition-all duration-300">
              <p className="text-sm font-medium uppercase tracking-widest text-white/50">{pass.name}</p>
              <p className="mt-3 font-heading text-4xl font-black text-white">{pass.price}</p>
              <div className="mt-5">
                <Button href="/membership#book" size="sm" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Recovery Casual Passes */}
      <Section dark>
        <SectionHeading
          title="Recovery — Casual Passes"
          subtitle="Non-members. Per session. Private room access."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { people: "1 Person", price: "$50" },
            { people: "2 People", price: "$70" },
            { people: "3 People", price: "$90" },
            { people: "4 People", price: "$110" },
          ].map((tier) => (
            <div key={tier.people} className="card-futuristic rounded-xl p-6 text-center transition-all duration-300">
              <p className="text-sm font-medium uppercase tracking-widest text-white/50">{tier.people}</p>
              <p className="mt-3 font-heading text-4xl font-black text-white">{tier.price}</p>
              <p className="mt-1 text-xs text-white/40">per session</p>
              <div className="mt-5">
                <Button href="/recovery-hub#book" size="sm" className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Have Questions About Pricing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Get in touch and we&apos;ll find the plan that works best for your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="outline" size="lg">
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
