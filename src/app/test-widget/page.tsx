import HapanaWidget from "@/components/HapanaWidget";

export const metadata = { title: "Widget Test" };

export default function TestWidgetPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-8 font-heading text-2xl font-bold">Class Schedule — Widget Test</h1>
      <HapanaWidget type="classes" />
    </div>
  );
}
