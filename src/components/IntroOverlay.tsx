"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    // Skip if already shown this session
    if (sessionStorage.getItem("hyperfit-intro")) {
      setPhase("done");
      return;
    }

    // Phase 1: logo animates in (already playing via CSS)
    // Phase 2: after 1.8s, start the reveal (slide up + fade out)
    const revealTimer = setTimeout(() => setPhase("reveal"), 1800);
    // Phase 3: after reveal animation finishes, remove from DOM
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("hyperfit-intro", "1");
    }, 2600);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-jet ${
        phase === "reveal" ? "intro-exit" : ""
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-40" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan/5 blur-3xl intro-pulse" />

      {/* Horizontal scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent intro-scan" />

      {/* Logo + tagline */}
      <div className="relative flex flex-col items-center gap-6 intro-logo">
        <Logo height={40} className="md:h-[56px]" />
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-cyan/40" />
          <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan/70">
            Function Training Gym
          </span>
          <div className="h-px w-8 bg-cyan/40" />
        </div>
      </div>
    </div>
  );
}
