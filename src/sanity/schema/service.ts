import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Icon key: users, dumbbell, target, heart, lock, userGroup",
      options: {
        list: [
          { title: "Users", value: "users" },
          { title: "Dumbbell", value: "dumbbell" },
          { title: "Target", value: "target" },
          { title: "Heart", value: "heart" },
          { title: "Lock", value: "lock" },
          { title: "User Group", value: "userGroup" },
        ],
      },
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
