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
    <div className="card-futuristic group rounded-xl p-8 transition-all duration-300">
      <div className="mb-5 inline-flex rounded-lg border border-cyan/20 bg-cyan/5 p-3 text-cyan transition-colors duration-300 group-hover:bg-cyan/10">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-heading text-base font-bold uppercase tracking-wide">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
