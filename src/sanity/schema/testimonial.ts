import { defineType, defineField } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "rating",
      title: "Rating (1–5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
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
