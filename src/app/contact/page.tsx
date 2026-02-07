import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import LocationHours from "@/components/LocationHours";
import Button from "@/components/Button";
import { siteConfig } from "@/config/site";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HyperFit Mitcham — call, message, or visit us. Find our address, opening hours, and Google Maps location.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Book a class, ask a question, or come say hello at HyperFit Mitcham."
        showCTAs={false}
      />

      {/* Contact Form + Info */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div>
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you shortly."
              centered={false}
            />
            <ContactForm />
          </div>

          {/* Quick Contact */}
          <div>
            <SectionHeading
              title="Quick Contact"
              subtitle="Prefer to reach out directly? Here's how."
              centered={false}
            />
            <div className="space-y-4">
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                className="w-full"
              >
                Call {siteConfig.phoneDisplay}
              </Button>
              <Button
                href={siteConfig.messageUrl}
                variant="outline"
                className="w-full"
              >
                Send a Message
              </Button>
              <Button
                href={siteConfig.bookingUrl}
                className="w-full"
                external
              >
                Book a Class
              </Button>
            </div>

            {/* Socials */}
            <div className="mt-8">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan">
                Follow Us
              </h3>
              <div className="mt-3 flex gap-4">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-lg bg-steel p-3 text-muted transition-colors hover:bg-steel-light hover:text-cyan"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-lg bg-steel p-3 text-muted transition-colors hover:bg-steel-light hover:text-cyan"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={siteConfig.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="rounded-lg bg-steel p-3 text-muted transition-colors hover:bg-steel-light hover:text-cyan"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Location & Hours */}
      <Section dark>
        <SectionHeading
          title="Visit Us in Mitcham"
          subtitle="We're easy to find with plenty of free parking."
        />
        <LocationHours />
      </Section>

      {/* Google Map */}
      <Section>
        <SectionHeading title="Find Us" />
        <div className="overflow-hidden rounded-xl">
          <iframe
            src={siteConfig.googleMapsEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HyperFit location on Google Maps"
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Ready to Start Training?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Book your first class, claim your free trial, or just drop in and
            say hello. We can&apos;t wait to meet you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={siteConfig.bookingUrl} size="lg" external>
              Book a Class
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Join Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
