import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import GalleryGrid from "@/components/GalleryGrid";
import LocationHours from "@/components/LocationHours";
import Button from "@/components/Button";
import { siteConfig, services, pricingPlans, testimonials } from "@/config/site";
import type { IconName } from "@/components/Icons";

const features = [
  {
    title: "Functional Training Space",
    description:
      "Our open-plan functional training area is built for movement — rigs, sleds, ropes, and space to train the way your body was designed to move.",
    icon: "users" as IconName,
  },
  {
    title: "Fully Equipped Gym",
    description:
      "Premium strength and cardio equipment including free weights, machines, and everything you need for a complete workout.",
    icon: "dumbbell" as IconName,
  },
  {
    title: "3 Private Rooms",
    description:
      "Dedicated private training and recovery rooms for PT sessions, rehab, mobility work, or small group training.",
    icon: "lock" as IconName,
  },
  {
    title: "Community & Coaching",
    description:
      "Expert coaches who know your name, your goals, and how to push you further. A supportive community that trains together.",
    icon: "heart" as IconName,
  },
];

const featuredServices = services.slice(0, 4);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        title="SELF. CARE. CLUB."
        subtitle="Mitcham's premier function training gym — open functional space, full gym facilities, and 3 private training & recovery rooms."
      />

      {/* What We Offer */}
      <Section>
        <SectionHeading
          title="What We Offer"
          subtitle="Everything you need to train smarter, recover better, and achieve real results."
          gradient
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      {/* Featured Services */}
      <Section dark>
        <SectionHeading
          title="Our Services"
          subtitle="From group classes to private coaching — we've got your training covered."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section>
        <SectionHeading
          title="Membership & Pricing"
          subtitle="Flexible plans to fit your training style and budget."
          gradient
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/pricing" variant="outline">
            View Full Pricing
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section dark>
        <SectionHeading
          title="What Our Members Say"
          subtitle="Real results from real people training at HyperFit Mitcham."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Gallery Preview */}
      <Section>
        <SectionHeading
          title="Inside HyperFit"
          subtitle="Take a look at our training space, gym floor, and private rooms."
        />
        <GalleryGrid />
      </Section>

      {/* Location & Hours */}
      <Section dark>
        <SectionHeading
          title="Find Us in Mitcham"
          subtitle="Drop in, say hello, and see the space for yourself."
        />
        <LocationHours />
      </Section>

      {/* Final CTA */}
      <Section className="grid-overlay relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan/5 blur-3xl" />

        <div className="relative text-center">
          <h2 className="text-gradient font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
            Ready to Train Different?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Stop going through the motions. Start training with purpose at
            Mitcham&apos;s leading function training gym.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Book a Class
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Join Now
            </Button>
            <Button
              href={`tel:${siteConfig.phone}`}
              variant="ghost"
              size="lg"
            >
              Call Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
