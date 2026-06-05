import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import HapanaWidget from "@/components/HapanaWidget";
import { siteConfig } from "@/config/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "HyperFit membership plans — EarlyBird $55/week locked for life, 2-Week Trial intro offer, and All-Access membership. Join Mitcham's premier functional training gym.",
};

const allAccessFeatures = [
  "24/7 gym access — ground floor",
  "First floor access — boxing room",
  "Functional training classes",
  "Unlimited Hyperchamber boxing room classes",
  "Unlimited recovery boot sessions",
  "1 private room session per week (Room 2 or Room 3)",
];

const memberRecoveryInclusions = [
  "1 private room session per week included (Room 2 or 3)",
  "+$10 per additional session",
  "+$20 per extra person brought into a session",
];

const casualRecoveryPasses = [
  { people: "1 Person", price: "$40" },
  { people: "2 People", price: "$60" },
  { people: "3 People", price: "$80" },
  { people: "4 People", price: "$100" },
];

const membershipTerms = [
  "30 days notice required to cancel",
  "14 days notice required to pause a membership",
  "Memberships can be paused for a maximum of 60 days per year",
  "EarlyBird rate locked in for life — no price increases while you remain a member",
  "EarlyBird available launch day + 2 weeks only",
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        title="Membership Plans"
        subtitle="One gym. Full access. Simple pricing."
        showCTAs={false}
      />

      {/* Intro Offer */}
      <Section>
        <SectionHeading
          title="Intro Offer"
          subtitle="New to HyperFit? Start here."
          gradient
        />
        <div className="mx-auto max-w-sm">
          <div className="card-futuristic rounded-xl p-8 text-center transition-all duration-300">
            <p className="text-sm font-medium uppercase tracking-widest text-white/50">
              2-Week Trial
            </p>
            <div className="mt-3 flex items-baseline justify-center gap-1">
              <span className="font-heading text-6xl font-black text-white">$65</span>
            </div>
            <p className="mt-1 text-sm text-white/50">full access for 2 weeks</p>
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-sm leading-relaxed text-white/70">
              Experience everything HyperFit has to offer. After 2 weeks, rolls automatically onto a full membership.
            </p>
            <div className="mt-8">
              <Button href={siteConfig.trialUrl} className="w-full" external>
                Book a 30-Minute Consult
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* EarlyBird */}
      <Section dark>
        <SectionHeading
          title="EarlyBird Membership"
          subtitle="Launch special — available for a limited time only."
        />
        <div className="mx-auto max-w-sm">
          <div className="relative card-futuristic rounded-xl p-8 border-white/30 transition-all duration-300">
            <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
              <div className="whitespace-nowrap rounded-full bg-white px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-jet">
                Limited Time
              </div>
            </div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="font-heading text-5xl font-bold text-white">$55</span>
              <span className="text-sm text-white/70">/week</span>
            </div>
            <p className="mt-1 text-xs text-white/50">
              Rate locked in for life — available launch day + 2 weeks only
            </p>
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="text-sm leading-relaxed text-white/70">
              Full All-Access membership at $55/week — locked in permanently for as long as you remain an active member.
            </p>
            <div className="mt-6">
              <Button href="/membership#book" className="w-full">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* All-Access Membership */}
      <Section>
        <SectionHeading
          title="All-Access Membership"
          subtitle="One membership. Everything included."
          gradient
        />
        <div className="mx-auto max-w-lg">
          <ul className="space-y-3">
            {allAccessFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/membership#book" size="lg">
              Join Now
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Ask a Question
            </Button>
          </div>
        </div>
      </Section>

      {/* PT Packages */}
      <Section dark>
        <SectionHeading
          title="PT Packages"
          subtitle="Personal training packages — details coming soon."
        />
        <div className="mx-auto max-w-sm text-center">
          <div className="card-futuristic rounded-xl p-10 transition-all duration-300">
            <p className="font-heading text-2xl font-bold text-white/40">Coming Soon</p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              We&apos;re finalising our PT package details. Get in touch to be the first to know.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="outline" className="w-full">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Recovery — Member Inclusions */}
      <Section>
        <SectionHeading
          title="Recovery — Member Inclusions"
          subtitle="Included with every All-Access membership."
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
            <Button href={siteConfig.trialUrl} variant="outline" size="lg" external>
              Book a Free Class
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
