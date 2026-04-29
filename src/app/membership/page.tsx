import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "HyperFit membership plans — Hyper Elite, Hyper Train, Hyper Recover, Early Bird deals, and casual class passes. Join Mitcham's premier functional training gym.",
};

const hyperEliteFeatures = [
  "24/7 gym access",
  "Unlimited classes (strength / conditioning / boxing / Hyrox sims)",
  "Cardio / Hyper Hybrid",
  "1 recovery session per week (Private Rooms 2 & 3)",
  "Additional recovery pass available for $10",
  "Unlimited access to recovery boots",
];

const hyperTrainFeatures = [
  "24/7 gym access",
  "Unlimited classes (strength / conditioning / boxing / Hyrox sims)",
];

const hyperRecoverFeatures = [
  "Unlimited recovery sessions per week (any recovery room)",
  "Unlimited access to recovery boots",
];

const casualPasses = [
  { name: "Intro Offer — 5 Classes", price: "$50" },
  { name: "Weekly Recovery Pass", price: "$55" },
  { name: "Single Class", price: "$26" },
  { name: "5 Class Pack", price: "$120" },
  { name: "10 Class Pack", price: "$220" },
  { name: "Gym Day Pass", price: "$15" },
];

const earlyBirdPlans = [
  {
    name: "1 Membership — Full Access + Recovery",
    price: "$60",
    note: "Lifetime Price",
    detail: "Includes 1 recovery session per week. Price locked for life.",
  },
];

const membershipTerms = [
  "Early Bird membership prices are locked in for life — no price increases",
  "8-week lock-in period for memberships",
  "30 days notice required to cancel",
  "7 days notice required to pause a membership",
  "Memberships can be paused for a maximum of 90 days per year",
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        title="Membership Plans"
        subtitle="Flexible memberships designed around your training goals. Join the HyperFit community today."
        showCTAs={false}
      />

      {/* HYPER ELITE ⚡ */}
      <Section>
        <SectionHeading
          title="Hyper Elite ⚡"
          subtitle="Full access — train, recover, and perform at your best."
          gradient
        />
        <div className="mx-auto max-w-lg">
          <ul className="space-y-3">
            {hyperEliteFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Sign Up Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </Section>

      {/* HYPER TRAIN ⚡ */}
      <Section dark>
        <SectionHeading
          title="Hyper Train ⚡"
          subtitle="Classes + gym — everything you need to train hard."
        />
        <div className="mx-auto max-w-lg">
          <ul className="space-y-3">
            {hyperTrainFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Sign Up Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </Section>

      {/* HYPER RECOVER ⚡ */}
      <Section>
        <SectionHeading
          title="Hyper Recover ⚡"
          subtitle="Dedicated recovery access for those who take restoration seriously."
          gradient
        />
        <div className="mx-auto max-w-lg">
          <div className="card-futuristic rounded-xl p-8 transition-all duration-300">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-5xl font-bold text-white">$55</span>
              <span className="text-sm text-white/70">/week</span>
            </div>
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ul className="space-y-3">
              {hyperRecoverFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={siteConfig.bookingUrl} className="w-full" external>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Casual Passes */}
      <Section dark>
        <SectionHeading
          title="Casual Passes"
          subtitle="No membership needed — grab a pass and train."
        />
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casualPasses.map((pass) => (
            <div key={pass.name} className="card-futuristic rounded-xl p-6 text-center transition-all duration-300">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                {pass.name}
              </h3>
              <div className="mt-3">
                <span className="font-heading text-4xl font-bold text-white">{pass.price}</span>
              </div>
              <div className="mt-4">
                <Button href={siteConfig.bookingUrl} variant="outline" size="sm" className="w-full" external>
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 1 Month Opportunity */}
      <Section>
        <SectionHeading
          title="1 Month Opportunity"
          subtitle="Try HyperFit for a full month — no long-term commitment required."
          gradient
        />
        <div className="mx-auto max-w-sm">
          <div className="card-futuristic rounded-xl p-8 text-center transition-all duration-300">
            <p className="text-sm font-medium uppercase tracking-widest text-white/50">Limited Time</p>
            <p className="mt-3 font-heading text-5xl font-black text-white">1 Month</p>
            <p className="mt-1 text-sm text-white/50">Full membership access</p>
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-sm leading-relaxed text-white/70">
              A one-month opportunity to experience everything HyperFit has to offer — classes, gym, and recovery — before committing long term.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.bookingUrl} className="w-full" external>
                Claim Now
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Early Bird Memberships */}
      <Section dark>
        <SectionHeading
          title="Early Bird Memberships"
          subtitle="Launch Day & limited two weeks only — prices locked in for life."
        />
        <div className="mx-auto max-w-sm">
          {earlyBirdPlans.map((plan) => (
            <div key={plan.name} className="relative card-futuristic rounded-xl p-8 border-white/30 transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                <div className="whitespace-nowrap rounded-full bg-white px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-jet">
                  {plan.note}
                </div>
              </div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wide">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-sm text-white/70">/week</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {plan.detail}
              </p>
              <div className="mt-6">
                <Button href={siteConfig.bookingUrl} className="w-full" external>
                  Claim Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Membership Terms */}
      <Section>
        <SectionHeading
          title="Membership Terms"
          subtitle="Transparent terms — no surprises."
        />
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-3">
            {membershipTerms.map((term) => (
              <li key={term} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{term}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ready to Join HyperFit?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Sign up today or get in touch — we&apos;ll help you find the right
            membership for your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Sign Up Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="ghost"
              size="lg"
            >
              Call {siteConfig.phoneDisplay}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
