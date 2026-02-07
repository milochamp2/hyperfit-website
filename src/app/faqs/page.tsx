import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import Button from "@/components/Button";
import { siteConfig, faqs } from "@/config/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about HyperFit Mitcham — booking, memberships, private rooms, cancellation policy, beginner classes, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about training at HyperFit Mitcham."
        showCTAs={false}
      />

      <Section>
        <SectionHeading
          title="Got Questions? We've Got Answers."
          subtitle="If you can't find what you're looking for, don't hesitate to get in touch."
        />
        <div className="mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Our team is happy to help. Reach out anytime and we&apos;ll get
            back to you as soon as possible.
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
              Call Us
            </Button>
            <Button href={siteConfig.messageUrl} variant="ghost" size="lg">
              Message Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
