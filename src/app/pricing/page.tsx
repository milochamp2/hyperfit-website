import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import Button from "@/components/Button";
import { siteConfig, pricingPlans } from "@/config/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "HyperFit membership pricing — EarlyBird $55/week locked for life, 2-Week Trial $65, All-Access membership, and PT packages. Simple, transparent pricing in Mitcham.",
};

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="One membership tier. Full access. No hidden fees."
        showCTAs={false}
      />

      <Section>
        <SectionHeading
          title="Membership Plans"
          subtitle="EarlyBird pricing is locked in for life — available at launch for a limited time only."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
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
            { people: "1 Person", price: "$40" },
            { people: "2 People", price: "$60" },
            { people: "3 People", price: "$80" },
            { people: "4 People", price: "$100" },
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

      {/* Intro Offer */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-xl border-2 border-white/30 bg-steel p-8 text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Intro Offer: 2-Week Trial — $65
          </h2>
          <p className="mt-3 text-white/70">
            New to HyperFit? Try everything for 2 weeks — full All-Access membership, all classes, recovery, and more. Rolls automatically onto a full membership after your trial.
          </p>
          <div className="mt-6">
            <Button href="/membership#book" size="lg">
              Sign Up Now
            </Button>
          </div>
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
