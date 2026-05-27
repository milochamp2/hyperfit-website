"use client";

import Script from "next/script";

const WIDGET_ID = "SHlRbC9Pb0dIbnFWRzNFVEpHSU03dz09";

type WidgetType = "classes" | "packages" | "privates";

export default function HapanaWidget({ type }: { type: WidgetType }) {
  return (
    <>
      {type === "classes" && (
        <hapana-widget
          data-type="classes"
          widget-id={WIDGET_ID}
          instructor-id=""
          session-type=""
        />
      )}
      {type === "packages" && (
        <hapana-widget
          data-type="packages"
          widget-id={WIDGET_ID}
          package-id=""
          variant=""
        />
      )}
      {type === "privates" && (
        <hapana-widget
          data-type="privates"
          widget-id={WIDGET_ID}
          instructor-id=""
        />
      )}
      <Script
        src="https://widget.hapana.com/hapana_widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
