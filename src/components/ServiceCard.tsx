import Button from "./Button";
import { type IconName, getIcon } from "./Icons";
import { CheckIcon } from "./Icons";
import { siteConfig } from "@/config/site";

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: readonly string[];
  icon: IconName;
}

export default function ServiceCard({
  title,
  description,
  benefits,
  icon,
}: ServiceCardProps) {
  const Icon = getIcon(icon);

  return (
    <div className="card-futuristic group flex flex-col rounded-xl p-6 transition-all duration-300">
      <div className="mb-4 inline-flex self-start rounded-lg border border-cyan/20 bg-cyan/5 p-3 text-cyan transition-colors duration-300 group-hover:bg-cyan/10 group-hover:shadow-[0_0_12px_rgba(0,194,255,0.15)]">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href={siteConfig.bookingUrl} size="sm" external>
          Book Now
        </Button>
      </div>
    </div>
  );
}
