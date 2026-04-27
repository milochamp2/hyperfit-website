"use client";

import { useState, useEffect } from "react";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    if (sessionStorage.getItem("hyperfit-intro")) {
      setPhase("done");
      return;
    }

    const revealTimer = setTimeout(() => setPhase("reveal"), 2000);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("hyperfit-intro", "1");
    }, 2800);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-jet overflow-hidden ${
        phase === "reveal" ? "intro-exit" : ""
      }`}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Large glow orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] rounded-full bg-cyan/10 blur-[120px] intro-pulse" />

      {/* Corner accents */}
      <div className="absolute top-8 left-8 h-14 w-14 border-t-2 border-l-2 border-cyan/50" />
      <div className="absolute top-8 right-8 h-14 w-14 border-t-2 border-r-2 border-cyan/50" />
      <div className="absolute bottom-8 left-8 h-14 w-14 border-b-2 border-l-2 border-cyan/50" />
      <div className="absolute bottom-8 right-8 h-14 w-14 border-b-2 border-r-2 border-cyan/50" />

      {/* Horizontal scan line */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/70 to-transparent intro-scan" />

      {/* Logo + tagline */}
      <div className="relative flex flex-col items-center gap-5 intro-logo">
        <div className="font-heading text-7xl font-black tracking-[0.12em] text-white md:text-8xl lg:text-9xl">
          HYPERFIT
        </div>
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-white/25" />
          <span className="font-body text-[11px] font-semibold uppercase tracking-[0.5em] text-white/60">
            Function Training Gym
          </span>
          <div className="h-px w-10 bg-white/25" />
        </div>
      </div>
    </div>
  );
}
