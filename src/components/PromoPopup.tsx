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
      className="fixed inset-0 z-[150] flex items-end justify-center px-0 sm:items-center sm:px-4"
      style={{ animation: "fadeIn 0.35s ease" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={dismiss} />

      {/* Card */}
      <div
        className={`relative w-full ${
          step === "offer"
            ? "h-[92dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-xl rounded-t-2xl sm:rounded-2xl"
            : "max-w-sm rounded-t-2xl sm:rounded-2xl"
        } border border-white/10 bg-jet shadow-2xl flex flex-col overflow-hidden`}
        style={{ animation: "slideUp 0.4s cubic-bezier(0.16,1,0.3,1)" }}
      >
        {/* Top accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
        >
          <XIcon className="h-4 w-4" />
        </button>

        {/* ── Question step ── */}
        {step === "question" && (
          <div className="px-7 pb-8 pt-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10">
              <span className="text-2xl">👋</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-white">
              First time at HyperFit?
            </h2>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              We&apos;ve got a special intro deal —{" "}
              <span className="font-semibold text-white">$7 for 7 days</span> —
              waiting for new members.
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

        {/* ── Offer step ── */}
        {step === "offer" && (
          <>
            {/* Sticky header */}
            <div className="shrink-0 border-b border-white/10 px-5 py-4 text-center">
              <span className="inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan">
                Intro Offer · New Members Only
              </span>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="font-heading text-4xl font-black text-white leading-none">
                  $7
                </span>
                <div className="text-sm text-white/50 leading-tight text-left">
                  for<br />
                  <span className="font-semibold text-white text-base">7 days</span>
                </div>
              </div>
              <p className="mt-1 text-[10px] text-white/30 uppercase tracking-wider">
                New members only · Classes only
              </p>
            </div>

            {/* Scrollable widget area — white background to match Hapana's own styling */}
            <div className="hapana-wrapper flex-1 overflow-y-auto bg-white p-4 sm:p-6">
              <HapanaWidget type="introOffer" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
