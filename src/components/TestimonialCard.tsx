import { StarIcon } from "./Icons";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="card-futuristic rounded-xl p-6 transition-all duration-300">
      <div className="mb-3 flex gap-1 text-cyan">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3 border-t border-cyan/10 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan/10 font-heading text-sm font-bold text-cyan">
          {name.charAt(0)}
        </div>
        <span className="font-heading text-sm font-bold">{name}</span>
      </div>
    </div>
  );
}
