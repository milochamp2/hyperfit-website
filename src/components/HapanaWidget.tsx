"use client";

import { useEffect, useRef } from "react";

const WIDGET_ID = "SHlRbC9Pb0dIbnFWRzNFVEpHSU03dz09";
const SCRIPT_SRC = "https://widget.hapana.com/hapana_widget.js";

type WidgetType = "classes" | "packages" | "privates";

const widgetHTML: Record<WidgetType, string> = {
  classes: `<hapana-widget data-type="classes" widget-id="${WIDGET_ID}" instructor-id="" session-type=""></hapana-widget>`,
  packages: `<hapana-widget data-type="packages" widget-id="${WIDGET_ID}" package-id="" variant=""></hapana-widget>`,
  privates: `<hapana-widget data-type="privates" widget-id="${WIDGET_ID}" instructor-id=""></hapana-widget>`,
};

export default function HapanaWidget({ type }: { type: WidgetType }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = widgetHTML[type];

    // Always remove and re-add the script so it re-executes for the new
    // widget element. On client-side navigation the script is already in the
    // DOM but won't reinitialise — removing it first forces re-execution.
    // The CDN script is browser-cached so there's no extra network cost.
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (s) s.remove();
    };
  }, [type]);

  return <div ref={containerRef} />;
}
