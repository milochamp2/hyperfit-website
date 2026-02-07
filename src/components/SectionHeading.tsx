interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl ${
          gradient ? "text-gradient" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted md:text-xl">{subtitle}</p>
      )}
      <div className={`mt-5 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-cyan/30" />
        <div className="h-1.5 w-1.5 rotate-45 bg-cyan" />
        <div className="h-px w-8 bg-cyan/30" />
      </div>
    </div>
  );
}
