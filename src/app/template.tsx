"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={isAnimating ? "page-enter" : "page-enter page-enter-active"}
    >
      {children}
    </div>
  );
}
