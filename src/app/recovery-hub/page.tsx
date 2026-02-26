import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ImageSlider from "@/components/ImageSlider";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Recovery Hub",
  description:
    "Explore HyperFit's Recovery Hub — Private Room 3 dedicated to recovery, mobility, and rehabilitation. Book your private recovery session today.",
};

const room3Images = [
  { src: "/recovery/image 1.jpg", alt: "Private Room 3 — Recovery space overview" },
  { src: "/recovery/image 2.jpg", alt: "Private Room 3 — Recovery equipment" },
  { src: "/recovery/image 3.jpg", alt: "Private Room 3 — Treatment area" },
  { src: "/recovery/image 4.jpg", alt: "Private Room 3 — Mobility station" },
  { src: "/recovery/image 5.jpg", alt: "Private Room 3 — Recovery tools" },
  { src: "/recovery/image 6.jpg", alt: "Private Room 3 — Stretching space" },
  { src: "/recovery/image 7.jpg", alt: "Private Room 3 — Rehabilitation area" },
  { src: "/recovery/image 8.jpg", alt: "Private Room 3 — Private setting" },
  { src: "/recovery/image 9.jpg", alt: "Private Room 3 — Full room view" },
];

const recoveryServices = [
  "Guided stretching and mobility sessions",
  "Soft tissue work and foam rolling",
  "Post-workout recovery protocols",
  "Injury rehabilitation sessions",
  "Private one-on-one recovery coaching",
  "Pre-hab and injury prevention programs",
];

export default function RecoveryHubPage() {
  return (
    <>
      <Hero
        title="Recovery Hub"
        subtitle="Dedicated private recovery rooms designed for mobility, rehabilitation, and total body restoration. Train hard. Recover smarter."
        showCTAs={false}
      />

      {/* Room Gallery */}
      <Section>
        <SectionHeading
          title="Private Room 3"
          subtitle="A purpose-built recovery space with everything you need to restore, recover, and rebuild."
          gradient
        />
        <ImageSlider images={room3Images} autoPlayInterval={5000} />
      </Section>

      {/* What We Offer */}
      <Section dark>
        <SectionHeading
          title="Recovery Services"
          subtitle="Expert-guided recovery sessions tailored to your body and goals."
        />
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-3">
            {recoveryServices.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 shrink-0 text-white" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why Recovery Matters */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Why Recovery Matters"
              centered={false}
            />
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Recovery is not optional — it&apos;s where the real gains happen.
                Without proper recovery, your body can&apos;t adapt to training
                stimulus, leading to plateaus, fatigue, and increased injury risk.
              </p>
              <p>
                At HyperFit, our Recovery Hub provides a private, focused
                environment with expert guidance to help you move better, feel
                better, and perform at your best. Whether you&apos;re recovering from
                a tough session or managing a long-term injury, our coaches are
                here to support you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3", label: "Private Rooms" },
              { value: "100%", label: "Privacy" },
              { value: "45min", label: "Session Length" },
              { value: "1-on-1", label: "Expert Coaching" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl border border-steel bg-jet-light p-6 text-center"
              >
                <div className="font-heading text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Book Your Recovery Session
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Take your recovery seriously. Book a private session in our Recovery
            Hub and feel the difference expert-guided recovery makes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Book a Session
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
