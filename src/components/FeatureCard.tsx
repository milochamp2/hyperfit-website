import { type IconName, getIcon } from "./Icons";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: IconName;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  const Icon = getIcon(icon);

  return (
    <div className="card-futuristic corner-accent group rounded-xl p-6 transition-all duration-300">
      <div className="mb-4 inline-flex rounded-lg border border-cyan/20 bg-cyan/5 p-3 text-cyan transition-colors duration-300 group-hover:bg-cyan/10">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-lg font-bold uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
