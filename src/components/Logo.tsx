interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 28 }: LogoProps) {
  // Proportional width based on the HYPERFIT logo aspect ratio (~6.5:1)
  const width = Math.round(height * 6.5);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 80"
      width={width}
      height={height}
      className={className}
      aria-label="HyperFit"
      role="img"
    >
      {/* HYPER — solid white fill, bold italic */}
      <text
        x="0"
        y="66"
        fill="white"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="76"
        letterSpacing="-2"
      >
        HYPER
      </text>
      {/* FIT — outlined, matching the logo style */}
      <text
        x="330"
        y="66"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        fontFamily="Montserrat, Arial Black, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="76"
        letterSpacing="-2"
      >
        FIT
      </text>
    </svg>
  );
}
