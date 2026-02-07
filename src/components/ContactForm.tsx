"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Replace with actual form submission logic (e.g. API route, Formspree, etc.)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-steel p-8 text-center">
        <h3 className="font-heading text-2xl font-bold text-cyan">
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
          <label htmlFor="name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-steel-light bg-steel px-4 py-3 text-white placeholder-muted outline-none transition-colors focus:border-cyan"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-steel-light bg-steel px-4 py-3 text-white placeholder-muted outline-none transition-colors focus:border-cyan"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-steel-light bg-steel px-4 py-3 text-white placeholder-muted outline-none transition-colors focus:border-cyan"
          placeholder="04XX XXX XXX"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-steel-light bg-steel px-4 py-3 text-white placeholder-muted outline-none transition-colors focus:border-cyan resize-none"
          placeholder="How can we help?"
        />
      </div>
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}
