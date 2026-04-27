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
    "Explore HyperFit's Recovery Hub — 3 private recovery rooms featuring infrared sauna, hot plunge, cold plunge, and recovery boots. Open 5 AM – 10 PM. Book your session today.",
};

const platinumRoomImages = [
  { src: "/recovery/platinum room/plat room image 1.jpg", alt: "Private Room 1 (Platinum) — Overview" },
  { src: "/recovery/platinum room/plat room img 2.jpg", alt: "Private Room 1 (Platinum) — Interior" },
  { src: "/recovery/platinum room/plat room image 3.jpg", alt: "Private Room 1 (Platinum) — Facilities" },
  { src: "/recovery/platinum room/plat room image 4.jpg", alt: "Private Room 1 (Platinum) — Full view" },
  { src: "/recovery/sauna room/plat room image 5.jpg", alt: "Private Room 1 (Platinum) — Sauna" },
  { src: "/recovery/sauna room/plat room image 6.jpg", alt: "Private Room 1 (Platinum) — Hot plunge" },
  { src: "/recovery/sauna room/plat room image 7.jpg", alt: "Private Room 1 (Platinum) — Cold plunge" },
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

const platinumFeatures = [
  "Infrared Sauna",
  "Hot Plunge",
  "Cold Plunge",
  "Shower",
];

const roomFeatures = [
  "Infrared Sauna",
  "Hot Plunge",
  "Cold Plunge",
];

export default function RecoveryHubPage() {
  return (
    <>
      <Hero
        title="Recovery Hub"
        subtitle="3 private recovery rooms, featuring — infrared sauna, hot plunge, cold plunge."
        showCTAs={false}
      />

      {/* Open hours banner */}
      <div className="bg-steel py-3 text-center">
        <p className="font-display text-2xl tracking-wide text-white">
          Open 5am to 10pm
        </p>
      </div>

      {/* Private Room 1 (Platinum) Gallery */}
      <Section>
        <SectionHeading
          title="Private Room 1 (Platinum)"
          subtitle="The Platinum Room — your private escape for elite recovery, built to help you reset, recharge, and perform at your best."
          gradient
        />
        <ImageSlider images={platinumRoomImages} autoPlayInterval={5000} />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {platinumFeatures.map((feature) => (
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
          subtitle="Step into your own private recovery space — move between infrared heat and hot/cold plunges to restore, recharge, and elevate your performance."
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
          title="Recovery Passes"
          subtitle="1 hour sessions. Open 5am – 10pm daily."
        />

        {/* Private Room 1 (Platinum) */}
        <div className="mx-auto mb-12 max-w-5xl">
          <h3 className="mb-6 text-center font-heading text-lg font-bold uppercase tracking-widest text-white/50">
            Private Room 1 — Platinum
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { people: "1 Person", price: "$40" },
              { people: "2 People", price: "$60" },
              { people: "3 People", price: "$80" },
              { people: "4 People", price: "$100" },
            ].map((tier) => (
              <div key={tier.people} className="card-futuristic rounded-xl p-6 text-center transition-all duration-300">
                <p className="text-sm font-medium uppercase tracking-widest text-white/50">{tier.people}</p>
                <p className="mt-3 font-heading text-4xl font-black text-white">{tier.price}</p>
                <p className="mt-1 text-xs text-white/40">per hour</p>
                <div className="mt-5">
                  <Button href={siteConfig.bookingUrl} size="sm" className="w-full" external>
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Room 2 & 3 */}
        <div className="mx-auto mb-12 max-w-5xl">
          <h3 className="mb-6 text-center font-heading text-lg font-bold uppercase tracking-widest text-white/50">
            Private Room 2 &amp; 3
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { people: "1 Person", price: "$35" },
              { people: "2 People", price: "$55" },
              { people: "3 People", price: "$75" },
              { people: "4 People", price: "$95" },
            ].map((tier) => (
              <div key={tier.people} className="card-futuristic rounded-xl p-6 text-center transition-all duration-300">
                <p className="text-sm font-medium uppercase tracking-widest text-white/50">{tier.people}</p>
                <p className="mt-3 font-heading text-4xl font-black text-white">{tier.price}</p>
                <p className="mt-1 text-xs text-white/40">per hour</p>
                <div className="mt-5">
                  <Button href={siteConfig.bookingUrl} size="sm" className="w-full" external>
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Boots */}
        <div className="mx-auto max-w-sm">
          <h3 className="mb-6 text-center font-heading text-lg font-bold uppercase tracking-widest text-white/50">
            Recovery Boots
          </h3>
          <div className="card-futuristic rounded-xl p-8 text-center transition-all duration-300">
            <p className="text-sm font-medium uppercase tracking-widest text-white/50">Per Person</p>
            <p className="mt-3 font-heading text-5xl font-black text-white">$25</p>
            <p className="mt-1 text-xs text-white/40">per hour</p>
            <div className="mt-6">
              <Button href={siteConfig.bookingUrl} className="w-full" external>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Recovery Matters */}
      <Section>
        <SectionHeading
          title="Why Recovery Matters"
          gradient
        />
        <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-white/70">
          <p>
            Recovery isn&apos;t a luxury — it&apos;s the difference between staying the same and actually progressing.
          </p>
          <p>
            You don&apos;t get better during the workout.<br />
            You get better when your body repairs, rebuilds, and comes back stronger.
          </p>
          <p>
            Skip recovery and you&apos;ll feel it:<br />
            fatigue, tightness, plateaus, injuries.
          </p>
          <p>
            Prioritise it, and everything changes:<br />
            better performance, faster results, more energy.
          </p>
          <p>
            At HyperFit, our Recovery Hub is built to accelerate that process —
            private rooms, infrared sauna, hot/cold plunge, and recovery boots
            designed to get you back at your best, faster.
          </p>
          <p className="text-xl font-semibold text-white">
            Train hard. Recover harder.
          </p>
          <p className="font-display text-4xl tracking-wide text-white md:text-5xl">
            SELF. CARE. CLUB.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-display text-4xl tracking-wide md:text-5xl">
            Book Your Recovery Session
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Full body reset, inside and out. Book your private recovery session
            and restore your body, clear your mind, and recharge your energy.
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
