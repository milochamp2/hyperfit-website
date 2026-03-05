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
    "HyperFit membership plans — Unlimited Membership, ONETWO + Hyperfit Bundle, Recovery Hub Membership, and class passes. Join Mitcham's premier function training gym.",
};

const unlimitedFeatures = [
  "Unlimited access to classes",
  "Unlimited access to the 24/7 functional gym",
  "Unlimited access to compression boots",
  "2 recovery sessions per week in Private Rooms 2 & 3",
];

const bundleFeatures = [
  "Unlimited ONETWO Boxing classes",
  "Unlimited Hyperfit classes",
  "Unlimited access to the Hyperfit 24/7 gym",
  "Unlimited access to compression boots",
  "2 recovery sessions per week in Private Rooms 2 & 3",
];

const recoveryFeatures = [
  "3 recovery sessions per week in any recovery room (Private Rooms 1, 2 & 3)",
  "Unlimited access to compression boots",
];

const classPasses = [
  { name: "Single Class", price: "$26" },
  { name: "5 Class Pack", price: "$120" },
  { name: "10 Class Pack", price: "$220" },
];

const membershipTerms = [
  "12-week lock-in period for memberships",
  "30 days notice required to cancel",
  "7 days notice required to freeze a membership",
  "Memberships can be frozen for a maximum of 3 months per year",
];

export default function MembershipPage() {
  return (
    <>
      <Hero
        title="Membership Plans"
        subtitle="Flexible memberships designed around your training goals. Join the HyperFit community today."
        showCTAs={false}
      />

      {/* Early Bird / Unlimited Membership */}
      <Section>
        <SectionHeading
          title="Unlimited Membership"
          subtitle="Everything you need to train, recover, and perform at your best."
          gradient
        />
        <div className="mx-auto max-w-4xl">
          {/* Features list */}
          <div className="mx-auto mb-10 max-w-lg">
            <ul className="space-y-3">
              {unlimitedFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Early Bird */}
            <div className="relative card-futuristic rounded-xl p-8 border-white/30 scale-[1.02] transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                <div className="whitespace-nowrap rounded-full bg-white px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-jet">
                  Early Bird Offer
                </div>
              </div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wide">
                Early Bird Unlimited Membership
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-white">$65</span>
                <span className="text-sm text-white/70">/week</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Available during our Open / Trial Day (before launch) and for two
                weeks after the gym officially launches. 12-week lock-in period.
                Price remains $65/week for those who sign up during the Early Bird
                period.
              </p>
              <div className="mt-6">
                <Button href={siteConfig.bookingUrl} className="w-full" external>
                  Sign Up Now
                </Button>
              </div>
            </div>

            {/* Standard */}
            <div className="card-futuristic rounded-xl p-8 transition-all duration-300">
              <h3 className="font-heading text-base font-bold uppercase tracking-wide">
                Unlimited Membership
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold text-white">$75</span>
                <span className="text-sm text-white/70">/week</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Our standard Unlimited Membership after the two-week Early Bird
                window closes. Full access to everything HyperFit offers.
              </p>
              <div className="mt-6">
                <Button href={siteConfig.bookingUrl} variant="outline" className="w-full" external>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ONETWO + Hyperfit Bundle */}
      <Section dark>
        <SectionHeading
          title="ONETWO + Hyperfit Bundle"
          subtitle="The ultimate training combo — boxing meets functional fitness."
        />
        <div className="mx-auto max-w-lg">
          <div className="card-futuristic rounded-xl p-8 transition-all duration-300">
            <div className="flex items-baseline gap-1">
              <span className="font-heading text-5xl font-bold text-white">$80</span>
              <span className="text-sm text-white/70">/week</span>
            </div>
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <ul className="space-y-3">
              {bundleFeatures.map((feature) => (
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

      {/* Recovery Hub Membership */}
      <Section>
        <SectionHeading
          title="Recovery Hub Membership"
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
              {recoveryFeatures.map((feature) => (
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

      {/* Class Passes */}
      <Section dark>
        <SectionHeading
          title="Hyperfit Class Passes"
          subtitle="No membership needed — grab a class pass and train."
        />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          {classPasses.map((pass) => (
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

      {/* Membership Terms */}
      <Section>
        <SectionHeading
          title="Membership Terms"
          subtitle="Transparent terms — no surprises."
          gradient
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
      <Section dark>
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
