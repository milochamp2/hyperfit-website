"use client";

import { useState, useEffect } from "react";
import { XIcon } from "./Icons";
import HapanaWidget from "./HapanaWidget";

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
        className={`relative w-full ${step === "offer" ? "max-w-2xl" : "max-w-sm"} rounded-2xl border border-white/10 bg-jet shadow-2xl overflow-y-auto max-h-[90vh]`}
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
              We&apos;ve got a special intro deal — <span className="text-white font-semibold">$7 for 7 days</span> — waiting for new members.
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
          <div className="px-6 pb-6 pt-5">
            {/* Header */}
            <div className="mb-4 text-center">
              <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan">
                Intro Offer · New Members Only
              </span>
              <div className="mt-3 flex items-baseline justify-center gap-2">
                <span className="font-heading text-5xl font-black text-white leading-none">$7</span>
                <div className="text-sm text-white/50 leading-tight text-left">
                  for<br />
                  <span className="text-white font-semibold text-base">7 days</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-white/40">New members only · Classes only</p>
            </div>
            {/* Hapana booking widget */}
            <HapanaWidget type="introOffer" />
          </div>
        )}
      </div>
    </div>
  );
}
