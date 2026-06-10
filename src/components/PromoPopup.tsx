"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { XIcon, CheckIcon } from "./Icons";

const SESSION_KEY = "hyperfit-promo-seen";

type Step = "question" | "offer" | "hidden";

export default function PromoPopup() {
  const [step, setStep] = useState<Step>("hidden");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setStep("question"), 3800);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setStep("hidden");
  }

  function handleYes() {
    setStep("offer");
  }

  if (step === "hidden") return null;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-end justify-center pb-6 px-4 sm:items-center sm:pb-0"
      style={{ animation: "fadeIn 0.35s ease" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Card */}
      <div
        className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-jet shadow-2xl overflow-hidden"
        style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Top accent glow */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />
        <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-cyan/15 blur-[40px]" />

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white"
        >
          <XIcon className="h-4 w-4" />
        </button>

        {step === "question" && (
          <div className="px-7 pb-8 pt-7 text-center">
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10">
              <span className="text-2xl">👋</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-white">
              First time at HyperFit?
            </h2>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              We&apos;ve got a special intro deal waiting for new members.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleYes}
                className="flex w-full items-center justify-center rounded-xl bg-cyan px-6 py-3 text-sm font-bold uppercase tracking-widest text-jet transition-opacity hover:opacity-90"
              >
                Yes — show me the deal
              </button>
              <button
                onClick={dismiss}
                className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
              >
                No, I&apos;m already a member
              </button>
            </div>
          </div>
        )}

        {step === "offer" && (
          <div className="px-7 pb-7 pt-6">
            {/* Badge */}
            <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan">
              Intro Offer · New Members Only
            </span>

            {/* Headline */}
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-heading text-6xl font-black text-white leading-none">$50</span>
              <div className="text-sm text-white/50 leading-tight">
                for<br />
                <span className="text-white font-semibold text-base">5 sessions</span>
              </div>
            </div>

            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Kick off your HyperFit journey with 5 full-access sessions for just $50. No lock-in, no commitment.
            </p>

            {/* Features */}
            <ul className="mt-4 space-y-1.5">
              {[
                "Full gym & class access",
                "Recovery boots included",
                "No ongoing commitment",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-cyan" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/membership"
              onClick={dismiss}
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-cyan px-6 py-3 text-sm font-bold uppercase tracking-widest text-jet transition-opacity hover:opacity-90"
            >
              Claim Offer
            </Link>

            <p className="mt-3 text-center text-[10px] text-white/30">
              New members only · Limited availability
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
