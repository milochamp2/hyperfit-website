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
    "HyperFit membership pricing — casual visits, unlimited memberships, class packs, and personal training packages. Flexible plans for every budget in Mitcham.",
};

export default function PricingPage() {
  return (
    <>
      <Hero
        title="Simple, Flexible Pricing"
        subtitle="No hidden fees, no lock-in contracts. Choose the plan that works for you."
        showCTAs={false}
      />

      <Section>
        <SectionHeading
          title="Membership Plans"
          subtitle="Train your way with our range of membership and session options."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </Section>

      {/* Private Room Pricing */}
      <Section dark>
        <SectionHeading
          title="Private Room Sessions"
          subtitle="Book one of our 3 private training and recovery rooms."
        />
        <div className="mx-auto max-w-2xl">
          <div className="rounded-xl bg-jet border border-steel p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-heading text-lg font-bold">
                  Private Room Hire
                </h3>
                <div className="mt-2">
                  <span className="font-heading text-3xl font-bold text-cyan">
                    $40
                  </span>
                  <span className="ml-1 text-muted">/hour</span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  Standard rate for private room bookings. Available for PT,
                  rehab, mobility, or small group sessions.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">
                  Member Rate
                </h3>
                <div className="mt-2">
                  <span className="font-heading text-3xl font-bold text-cyan">
                    $30
                  </span>
                  <span className="ml-1 text-muted">/hour</span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  Discounted rate for Unlimited Membership holders. Priority
                  booking access included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Special Offers */}
      <Section>
        <div className="mx-auto max-w-2xl rounded-xl border-2 border-cyan bg-steel p-8 text-center glow-cyan">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Intro Offer: First Class Free
          </h2>
          <p className="mt-3 text-muted">
            New to HyperFit? Try your first group class completely free — no
            strings attached. Experience the training, meet the coaches, and
            see why Mitcham trains here.
          </p>
          <div className="mt-6">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Claim Your Free Class
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
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Get in touch and we&apos;ll find the plan that works best for your
            goals and budget.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="outline"
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
