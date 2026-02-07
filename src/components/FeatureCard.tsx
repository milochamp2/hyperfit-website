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
    <div className="group rounded-xl bg-steel p-6 transition-all duration-300 hover:bg-steel-light">
      <div className="mb-4 inline-flex rounded-lg bg-cyan/10 p-3 text-cyan">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-xl font-bold">{title}</h3>
      <p className="mt-2 text-muted">{description}</p>
    </div>
  );
}
