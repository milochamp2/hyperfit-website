interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  diagonal?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  dark = false,
  diagonal = false,
}: SectionProps) {
  const bg = dark
    ? "bg-gradient-to-b from-steel to-jet-light"
    : "bg-jet";

  return (
    <section
      id={id}
      className={`relative px-4 py-20 md:py-28 ${bg} ${diagonal ? "clip-diagonal" : ""} ${className}`}
    >
      {/* Subtle top accent line for dark sections */}
      {dark && (
        <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />
      )}
      <div className="relative mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
