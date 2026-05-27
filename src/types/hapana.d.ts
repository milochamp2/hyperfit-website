declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "hapana-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "data-type": string;
        "widget-id": string;
        "instructor-id"?: string;
        "session-type"?: string;
        "package-id"?: string;
        variant?: string;
      };
    }
  }
}
