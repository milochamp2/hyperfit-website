import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import HapanaWidget from "@/components/HapanaWidget";
import PricingCard from "@/components/PricingCard";
import { CheckIcon } from "@/components/Icons";
import { pricingPlans, classPasses } from "@/config/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "HyperFit memberships — Hyper Train $45/week, Hyper Elite $55/week, Hyper Recover $55/week, plus class passes from $22. Join Mitcham's premier functional training gym.",
};

const memberRecoveryInclusions = [
  "Hyper Elite: 1 private room session included (Room 2 or 3)",
  "Hyper Recover: unlimited recovery — 1 private room session per day",
  "+$10 per additional session",
  "+$20 per extra person brought into a session",
];

const casualRecoveryPasses = [
  { people: "1 Person", price: "$40" },
  { people: "2 People", price: "$60" },
  { people: "3 People", price: "$80" },
  { people: "4 People", price: "$100" },
];

const ptPackages = [
  {
    title: "1on1 Coaching",
    description:
      "Personalized coaching built around your individual goals, training experience, movement needs, and performance targets.",
    features: [
      "Individualized training program to suit your goals",
      "1on1 coaching with a dedicated trainer",
      "Ongoing coach support and correspondence via the app",
      "Goal-specific exercise selection",
      "Technique coaching and movement correction",
      "Strength, fitness, body composition, or performance focus",
      "Exercise progressions and regressions where needed",
      "Direct feedback and support during the session",
      "Clear direction on what to focus on next",
    ],
  },
  {
    title: "Monthly Progress Coaching",
    description:
      "Ongoing coaching support for members wanting more structure, accountability, and direction with their training. Bridges the gap between group training and 1on1 coaching.",
    features: [
      "General training program to support your goals",
      "Ongoing coach support and correspondence via the app",
      "Monthly 30-minute progress coaching check-in",
      "Goal review and training direction",
      "Accountability and habit support",
      "Guidance around training frequency and class selection",
      "Program adjustments and progression recommendations",
      "Recovery, technique, and performance support",
      "Clear focus points for the month ahead",
    ],
  },
  {
    title: "Intro 1on1 Coaching Pack",
    label: "Starter Pack",
    description:
      "Designed to help new members build confidence, learn key movements, establish goals, and get clear direction with their training.",
    features: [
      "3x 1on1 coaching sessions",
      "Initial goal-setting and training direction",
      "Movement and technique assessment",
      "Coaching on key gym movements",
      "Confidence building with equipment and exercises",
      "Personalized exercise progressions where needed",
      "Recommended training pathway after the pack",
    ],
  },
];

const membershipTerms = [
  "30 days notice required to cancel",
  "14 days notice required to pause a membership",
  "Memberships can be paused for a maximum of 60 days per year",
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        title="Membership Plans"
        subtitle="One gym. Full access. Simple pricing."
        showCTAs={false}
      />

      {/* Sign Up & Purchase (Hapana widget) */}
      <div id="book" className="bg-gradient-to-b from-steel to-jet-light px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Sign Up & Purchase"
            subtitle="Select your membership or pass below to get started."
            gradient
          />
          <HapanaWidget type="packages" />
        </div>
      </div>

      {/* Memberships */}
      <Section dark>
        <SectionHeading
          title="Memberships"
          subtitle="Choose the membership that fits your training and recovery goals."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Section>

      {/* Class Passes */}
      <Section>
        <SectionHeading
          title="Class Passes"
          subtitle="No membership needed. Drop in or grab a pack."
          gradient
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {classPasses.map((pass) => (
            <div
              key={pass.name}
              className="card-futuristic rounded-xl p-6 text-center transition-all duration-300"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-white/50">
                {pass.name}
              </p>
              <div className="mt-3">
                <span className="font-heading text-4xl font-bold text-white">{pass.price}</span>
              </div>
              <div className="mt-4">
                <Button href="/membership#book" variant="outline" size="sm" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PT Packages */}
      <Section dark>
        <SectionHeading
          title="PT Packages"
          subtitle="Personal training tailored to your goals — from starter packs to ongoing 1on1 coaching."
        />
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {ptPackages.map((pkg) => (
            <div key={pkg.title} className="relative card-futuristic rounded-xl p-8 transition-all duration-300 flex flex-col">
              {pkg.label && (
                <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                  <div className="whitespace-nowrap rounded-full bg-white px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-jet">
                    {pkg.label}
                  </div>
                </div>
              )}
              <div className={pkg.label ? "mt-2" : ""}>
                <h3 className="font-heading text-xl font-bold text-white">{pkg.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{pkg.description}</p>
              </div>
              <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <ul className="flex-1 space-y-2.5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="outline" className="w-full">
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Recovery — Member Inclusions */}
      <Section>
        <SectionHeading
          title="Recovery — Member Inclusions"
          subtitle="Included with Hyper Elite and Hyper Recover memberships."
          gradient
        />
        <div className="mx-auto max-w-lg">
          <ul className="space-y-3">
            {memberRecoveryInclusions.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Recovery — Casual Passes */}
      <Section dark>
        <SectionHeading
          title="Recovery — Casual Passes"
          subtitle="Non-members. Per session, per room."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {casualRecoveryPasses.map((pass) => (
            <div
              key={pass.people}
              className="card-futuristic rounded-xl p-6 text-center transition-all duration-300"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-white/50">
                {pass.people}
              </p>
              <div className="mt-3">
                <span className="font-heading text-4xl font-bold text-white">{pass.price}</span>
              </div>
              <p className="mt-1 text-xs text-white/40">per session</p>
              <div className="mt-4">
                <Button
                  href="/recovery-hub#book"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Membership Terms */}
      <Section dark>
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
            <Button href="/membership#book" size="lg">
              Join Now
            </Button>
            <Button href="/services#book" variant="outline" size="lg">
              Book a Class
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
