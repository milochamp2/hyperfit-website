import { defineType, defineField } from "sanity";

export default defineType({
  name: "pricingPlan",
  title: "Pricing Plans",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Plan Name",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "e.g. $55, $65, TBC, Coming Soon",
    }),
    defineField({
      name: "period",
      title: "Period",
      type: "string",
      description: "e.g. per week, intro offer",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "highlighted",
      title: "Highlighted",
      type: "boolean",
      description: "Show as the featured/recommended plan",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Display Order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
