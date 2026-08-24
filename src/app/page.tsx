import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ServiceCard from "@/components/ServiceCard";
import HapanaWidget from "@/components/HapanaWidget";
import GalleryGrid from "@/components/GalleryGrid";
import LocationHours from "@/components/LocationHours";
import Button from "@/components/Button";
import { siteConfig, services } from "@/config/site";
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
    title: "Boxing Classes",
    description:
      "Hit the pads and build power, speed, and endurance with our coach-led boxing sessions — all levels welcome.",
    icon: "target" as IconName,
  },
  {
    title: "3 Private Rooms",
    description:
      "Dedicated private rooms — hot & cold baths, infrared sauna, up to 4 person use.",
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
        subtitle="Mitcham's premier all-in-one functional training hub — built for performance, recovery, and results. 24/7 gym access, boxing, HYROX, group classes, and private recovery rooms — all under one roof."
        showMarquee
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


      {/* Book a Class */}
      <div id="book" className="bg-gradient-to-b from-jet to-steel px-4 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Book a Class"
            subtitle="Pick a session and reserve your spot — it takes less than a minute."
            gradient
          />
          <HapanaWidget type="classes" />
        </div>
      </div>

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

      {/* App Download */}
      <Section dark>
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-steel to-jet px-8 py-12 text-center md:px-16">
            {/* Glow */}
            <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-cyan/10 blur-[60px]" />
            <div className="relative">
              <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan">
                Now Live
              </span>
              <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl">
                The HyperFit App is Here
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60 leading-relaxed">
                Book classes, manage your membership, track your sessions, and stay connected — all from your phone. Download the HyperFit app today.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                {/* App Store */}
                <a
                  href="https://apps.apple.com/au/app/hyperfit-gym/id6800585835?l=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Download on the</p>
                    <p className="text-sm font-bold text-white">App Store</p>
                  </div>
                </a>
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.hapana.hyperfit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 transition-all hover:border-white/40 hover:bg-white/10"
                >
                  <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.18 23.76c.3.17.64.24.99.2L14.9 12 11.1 8.2 3.18 23.76zm17.29-10.7-3.3-1.88-3.84 3.84 3.84 3.84 3.32-1.9c.95-.54.95-1.86-.02-2.9zM2.08.54C1.73.96 1.5 1.59 1.5 2.4v19.2c0 .81.23 1.44.58 1.86l.08.08L12.88 12v-.27L2.16.47l-.08.07zm8.89 8.89 1.13-1.13L3.18.24C2.83.2 2.49.27 2.19.44L11 9.43z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider">Get it on</p>
                    <p className="text-sm font-bold text-white">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Free Consult */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            New to HyperFit?
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Free 30-Min Facility Tour
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            Book a free 30-minute consult with our manager — we&apos;ll walk you through our facilities, introduce you to the team, and find the right membership for your goals.
          </p>
          <div className="mt-8">
            <Button href="/#book" size="lg">
              Book a Class
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="grid-overlay relative overflow-hidden">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan/5 blur-3xl" />

        <div className="relative text-center">
          <h2 className="text-gradient font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
            Ready to Train Different?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Stop going through the motions. Start training with purpose at
            Mitcham&apos;s leading function training gym.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/#book" size="lg">
              Book a Class
            </Button>
            <Button href="/membership" variant="outline" size="lg">
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
