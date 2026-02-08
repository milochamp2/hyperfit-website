import Button from "./Button";
import { CheckIcon } from "./Icons";
import { siteConfig } from "@/config/site";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 ${
        highlighted
          ? "card-futuristic border-cyan/30 glow-cyan scale-[1.02]"
          : "card-futuristic"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
          <div className="whitespace-nowrap rounded-full bg-cyan px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-jet">
            Most Popular
          </div>
        </div>
      )}
      <h3 className="font-heading text-base font-bold uppercase tracking-wide">
        {name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-gradient-accent font-heading text-5xl font-bold">
          {price}
        </span>
        <span className="text-sm text-muted">/{period}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>
      <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-cyan/10 to-transparent" />
      <ul className="flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href={siteConfig.bookingUrl}
          variant={highlighted ? "primary" : "outline"}
          className="w-full"
          external
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
