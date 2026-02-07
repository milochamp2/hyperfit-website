interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted md:text-xl">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded bg-cyan ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
