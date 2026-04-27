"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip on initial page load — let IntroOverlay handle that
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Show loader on route change
    setLoading(true);
    setVisible(true);

    // Simulate server load time (800ms–1.2s)
    const duration = 800 + Math.random() * 400;
    const timer = setTimeout(() => {
      setLoading(false);
      // Fade out after progress bar completes
      setTimeout(() => setVisible(false), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 h-[3px] w-full bg-transparent">
        <div
          className={`h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all ${
            loading ? "duration-[800ms] ease-out" : "duration-200 ease-in"
          }`}
          style={{ width: loading ? "90%" : "100%" }}
        />
      </div>

      {/* Full screen overlay — fades out */}
      <div
        className={`absolute inset-0 bg-jet transition-opacity duration-300 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-full items-center justify-center">
          <div className="font-display text-3xl tracking-wide text-white/80 animate-pulse">
            HYPERFIT
          </div>
        </div>
      </div>
    </div>
  );
}
