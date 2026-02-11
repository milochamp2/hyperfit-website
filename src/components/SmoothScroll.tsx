"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let scroll: import("locomotive-scroll").default | null = null;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
        },
      });
    })();

    return () => {
      scroll?.destroy();
    };
  }, [pathname]);

  return null;
}
