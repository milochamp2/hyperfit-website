"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type AnimState = "enter" | "active" | "done";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [state, setState] = useState<AnimState>("enter");

  useEffect(() => {
    setState("enter");
    const t1 = setTimeout(() => setState("active"), 50);
    // Remove all classes after the 500ms transition completes so no
    // transform remains on the wrapper — a persistent transform (even
    // translateY(0)) creates a new stacking context and breaks
    // position:fixed inside it (e.g. the Hapana modal).
    const t2 = setTimeout(() => setState("done"), 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]);

  const className =
    state === "enter" ? "page-enter" :
    state === "active" ? "page-enter page-enter-active" :
    "";

  return <div className={className}>{children}</div>;
}
