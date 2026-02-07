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
    <div className="rounded-xl bg-steel p-6">
      <div className="mb-3 flex gap-1 text-cyan">
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <p className="text-muted">&ldquo;{text}&rdquo;</p>
      <p className="mt-4 font-heading font-bold text-cyan">{name}</p>
    </div>
  );
}
