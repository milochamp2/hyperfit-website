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
    <div className="card-futuristic group flex flex-col rounded-xl p-8 transition-all duration-300">
      <div className="mb-5 inline-flex self-start rounded-lg border border-white/20 bg-white/5 p-3 text-white transition-colors duration-300 group-hover:bg-white/10">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-heading text-base font-bold uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
      <ul className="mt-5 flex-1 space-y-2.5">
        {benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm text-white/70">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-white" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={siteConfig.bookingUrl} size="sm" external>
          Book Now
        </Button>
      </div>
    </div>
  );
}
