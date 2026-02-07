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
    <div className="flex flex-col rounded-xl bg-steel p-6 transition-all duration-300 hover:bg-steel-light">
      <div className="mb-4 inline-flex rounded-lg bg-cyan/10 p-3 text-cyan self-start">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted">{description}</p>
      <ul className="mt-4 space-y-2 flex-1">
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
