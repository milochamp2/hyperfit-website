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
      className={`relative flex flex-col rounded-xl p-6 transition-all duration-300 ${
        highlighted
          ? "card-futuristic border-cyan/40 glow-cyan scale-[1.02]"
          : "card-futuristic hover:border-cyan/20"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan backdrop-blur-sm">
            Most Popular
          </div>
        </div>
      )}
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
        {name}
      </h3>
      <div className="mt-4">
        <span className="text-gradient-accent font-heading text-4xl font-bold">
          {price}
        </span>
        <span className="ml-2 text-sm text-muted">/{period}</span>
      </div>
      <p className="mt-3 text-sm text-muted">{description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
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
