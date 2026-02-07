"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";

const inputStyles =
  "w-full rounded-lg border border-cyan/10 bg-steel/50 px-4 py-3 text-white placeholder-muted/50 outline-none transition-all focus:border-cyan/40 focus:shadow-[0_0_12px_rgba(0,194,255,0.08)]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Replace with actual form submission logic (e.g. API route, Formspree, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-futuristic rounded-xl p-8 text-center glow-cyan">
        <h3 className="text-gradient font-heading text-2xl font-bold">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputStyles}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputStyles}
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className={inputStyles}
          placeholder="04XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputStyles} resize-none`}
          placeholder="How can we help?"
        />
      </div>
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
