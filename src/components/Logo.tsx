import Image from "next/image";

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = "", height = 28 }: LogoProps) {
  // Aspect ratio of the HYPERFIT logo (~8.5:1)
  const width = Math.round(height * 8.5);

  return (
    <Image
      src="/hyperfit-logo.png"
      alt="HyperFit"
      width={width}
      height={height}
      className={`invert brightness-200 ${className}`}
      priority
    />
  );
}
