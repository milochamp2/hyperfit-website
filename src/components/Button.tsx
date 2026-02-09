import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-jet font-bold hover:bg-white/90 btn-shimmer transition-all duration-300 hover:scale-[1.03]",
  outline:
    "border border-white/50 text-white font-bold hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.03]",
  ghost:
    "text-white font-semibold hover:text-white/80 transition-all duration-300 underline-offset-4 hover:underline",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-heading uppercase tracking-widest cursor-pointer";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
