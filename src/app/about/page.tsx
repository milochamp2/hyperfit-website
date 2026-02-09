import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about HyperFit — Mitcham's function training gym built for real results. Functional training methodology, expert coaching, and a supportive community.",
};

const values = [
  {
    title: "Function First",
    description:
      "Every program and class is designed around functional movement patterns that translate to real life. We train your body to move, lift, push, pull, and perform — not just look good.",
  },
  {
    title: "Personalised Coaching",
    description:
      "Our coaches know your name, your goals, and your limitations. Whether you're in a group class or a private session, you get the attention you deserve.",
  },
  {
    title: "Community Driven",
    description:
      "HyperFit is more than a gym — it's a community of people who push each other to be better. We celebrate every win, big or small.",
  },
  {
    title: "Private & Versatile Spaces",
    description:
      "With 3 private training and recovery rooms, we offer what most gyms can't — dedicated space for PT, rehab, mobility, and small group sessions.",
  },
];

const whoItsFor = [
  "Complete beginners looking for guidance and structure",
  "Athletes wanting to improve functional performance",
  "People recovering from injury needing private, focused sessions",
  "Anyone tired of boring, cookie-cutter gym routines",
  "Small groups or teams wanting private training",
  "Fitness enthusiasts who want coaching, not just equipment",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Built for Function. Driven by Community."
        subtitle="HyperFit is Mitcham's dedicated function training gym — where real coaching meets real results."
        showCTAs={false}
      />

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            title="Our Mission"
            subtitle="To make functional fitness accessible, effective, and enjoyable for everyone — regardless of age, experience, or fitness level."
          />
          <p className="text-white/70 leading-relaxed">
            HyperFit was founded with a simple belief: training should prepare
            you for life, not just the mirror. Our open functional training
            space, fully equipped gym floor, and private rooms create an
            environment where every member gets the coaching and support they
            need to achieve their goals. Based in the heart of Mitcham, we&apos;re
            proud to be a hub for functional fitness in our local community.
          </p>
        </div>
      </Section>

      {/* What Sets Us Apart */}
      <Section dark>
        <SectionHeading
          title="What Sets Us Apart"
          subtitle="More than a gym — a training experience built around you."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl bg-jet p-6 border border-steel"
            >
              <h3 className="font-heading text-xl font-bold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-white/70">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section>
        <SectionHeading
          title="Who Is HyperFit For?"
          subtitle="All levels welcome. No experience needed."
        />
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-3">
            {whoItsFor.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Come See the Space
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Drop in for a tour, try a free class, or get in touch — we&apos;d love
            to show you around HyperFit Mitcham.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Book a Free Trial
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
