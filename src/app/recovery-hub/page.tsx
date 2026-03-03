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
    "Explore HyperFit's Recovery Hub — 3 private recovery rooms with sauna, hot bath, cold bath, and recovery boots. Open 5 AM – 10 PM. Book your session today.",
};

const platinumRoomImages = [
  { src: "/recovery/platinum room/plat room image 1.jpg", alt: "Private Room 1 (Platinum) — Overview" },
  { src: "/recovery/platinum room/plat room img 2.jpg", alt: "Private Room 1 (Platinum) — Interior" },
  { src: "/recovery/platinum room/plat room image 3.jpg", alt: "Private Room 1 (Platinum) — Facilities" },
  { src: "/recovery/platinum room/plat room image 4.jpg", alt: "Private Room 1 (Platinum) — Full view" },
  { src: "/recovery/sauna room/plat room image 5.jpg", alt: "Private Room 1 (Platinum) — Sauna" },
  { src: "/recovery/sauna room/plat room image 6.jpg", alt: "Private Room 1 (Platinum) — Hot bath" },
  { src: "/recovery/sauna room/plat room image 7.jpg", alt: "Private Room 1 (Platinum) — Cold bath" },
  { src: "/recovery/sauna room/plat room image 8.jpg", alt: "Private Room 1 (Platinum) — Recovery area" },
];

const room2Images = [
  { src: "/recovery/private room 2 images/pr2 img 1.jpg", alt: "Private Room 2 — Overview" },
  { src: "/recovery/private room 2 images/pr2 img 2.jpg", alt: "Private Room 2 — Training area" },
  { src: "/recovery/private room 2 images/pr2 img 3.jpg", alt: "Private Room 2 — Equipment" },
  { src: "/recovery/private room 2 images/pr2 img 4.jpg", alt: "Private Room 2 — Session space" },
  { src: "/recovery/private room 2 images/pr2 img 5.jpg", alt: "Private Room 2 — Recovery setup" },
  { src: "/recovery/private room 2 images/pr2 img 6.jpg", alt: "Private Room 2 — Full room view" },
];

const room3Images = [
  { src: "/recovery/private room 3 images/image 1.jpg", alt: "Private Room 3 — Recovery space overview" },
  { src: "/recovery/private room 3 images/image 2.jpg", alt: "Private Room 3 — Recovery equipment" },
  { src: "/recovery/private room 3 images/image 3.jpg", alt: "Private Room 3 — Treatment area" },
  { src: "/recovery/private room 3 images/image 4.jpg", alt: "Private Room 3 — Mobility station" },
  { src: "/recovery/private room 3 images/image 5.jpg", alt: "Private Room 3 — Recovery tools" },
  { src: "/recovery/private room 3 images/image 6.jpg", alt: "Private Room 3 — Stretching space" },
  { src: "/recovery/private room 3 images/image 7.jpg", alt: "Private Room 3 — Rehabilitation area" },
  { src: "/recovery/private room 3 images/image 8.jpg", alt: "Private Room 3 — Private setting" },
  { src: "/recovery/private room 3 images/image 9.jpg", alt: "Private Room 3 — Full room view" },
];

const roomFeatures = [
  "4 Person Sauna",
  "Hot Bath",
  "Cold Bath",
];

export default function RecoveryHubPage() {
  return (
    <>
      <Hero
        title="Recovery Hub"
        subtitle="3 private recovery rooms featuring sauna, hot bath, cold bath, and recovery boots. Open 5 AM – 10 PM."
        showCTAs={false}
      />

      {/* Private Room 1 (Platinum) Gallery */}
      <Section>
        <SectionHeading
          title="Private Room 1 (Platinum)"
          subtitle="Our premium recovery room — the ultimate space for elite recovery and restoration."
          gradient
        />
        <ImageSlider images={platinumRoomImages} autoPlayInterval={5000} />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {roomFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Private Room 2 Gallery */}
      <Section dark>
        <SectionHeading
          title="Private Room 2"
          subtitle="A versatile private recovery space with sauna, hot bath, and cold bath."
        />
        <ImageSlider images={room2Images} autoPlayInterval={5000} />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {roomFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Private Room 3 Gallery */}
      <Section>
        <SectionHeading
          title="Private Room 3"
          subtitle="A purpose-built recovery space with everything you need to restore, recover, and rebuild."
          gradient
        />
        <ImageSlider images={room3Images} autoPlayInterval={5000} />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {roomFeatures.map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-white" />
              <span className="text-sm text-white/80">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section dark>
        <SectionHeading
          title="Recovery Room Pricing"
          subtitle="All passes are 1 hour. Open 5 AM – 10 PM daily."
        />
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {/* Platinum Room Pricing */}
          <div className="card-futuristic rounded-xl p-6 transition-all duration-300">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              Private Room 1 (Platinum)
            </h3>
            <div className="mt-4 space-y-3">
              {[
                { people: "1 Person", price: "$40" },
                { people: "2 Person", price: "$60" },
                { people: "3 Person", price: "$80" },
                { people: "4 Person", price: "$100" },
              ].map((tier) => (
                <div key={tier.people} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm text-white/70">{tier.people}</span>
                  <span className="font-heading font-bold text-white">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Private Room 2 & 3 Pricing */}
          <div className="card-futuristic rounded-xl p-6 transition-all duration-300">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              Private Room 2 &amp; 3
            </h3>
            <div className="mt-4 space-y-3">
              {[
                { people: "1 Person", price: "$35" },
                { people: "2 Person", price: "$55" },
                { people: "3 Person", price: "$75" },
                { people: "4 Person", price: "$95" },
              ].map((tier) => (
                <div key={tier.people} className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-sm text-white/70">{tier.people}</span>
                  <span className="font-heading font-bold text-white">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery Boots */}
          <div className="card-futuristic rounded-xl p-6 transition-all duration-300">
            <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white">
              Recovery Boots
            </h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-sm text-white/70">1 Hour Pass</span>
                <span className="font-heading font-bold text-white">$25</span>
              </div>
            </div>
          </div>
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
                environment with sauna, hot bath, cold bath, and recovery boots
                to help you move better, feel better, and perform at your best.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "3", label: "Private Rooms" },
              { value: "5AM–10PM", label: "Open Daily" },
              { value: "1hr", label: "Session Length" },
              { value: "From $25", label: "Per Session" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-futuristic flex flex-col items-center justify-center rounded-xl p-6 text-center transition-all duration-300"
              >
                <div className="font-heading text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-white/70">
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
            Take your recovery seriously. Book a private room with sauna, hot
            bath, and cold bath — and feel the difference.
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
