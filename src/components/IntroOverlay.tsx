"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");

  useEffect(() => {
    if (sessionStorage.getItem("hyperfit-intro")) {
      setPhase("done");
      return;
    }

    const revealTimer = setTimeout(() => setPhase("reveal"), 2200);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("hyperfit-intro", "1");
    }, 3000);

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
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Deep background glow — cyan left, purple right */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple/10 blur-[140px]" />

      {/* Pulsing center glow behind logo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[700px] rounded-full bg-cyan/8 blur-[80px] intro-pulse" />

      {/* Horizontal scan line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent intro-scan" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5 intro-logo">
        {/* Logo */}
        <Logo height={52} className="md:h-[64px]" />

        {/* Animated underline */}
        <div className="h-px w-0 animate-[expand_1s_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards] bg-gradient-to-r from-transparent via-cyan to-transparent" />

        {/* Tagline */}
        <span className="font-body text-[10px] font-medium uppercase tracking-[0.6em] text-white/40">
          Function Training Gym
        </span>

        {/* Loading bar */}
        <div className="mt-2 h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-0 animate-[load_1.8s_0.3s_ease-out_forwards] rounded-full bg-gradient-to-r from-cyan/60 to-cyan" />
        </div>
      </div>
    </div>
  );
}
