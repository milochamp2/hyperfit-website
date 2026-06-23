import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Sections",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      description: "Which page this hero belongs to (e.g. home, about, services)",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
          { title: "Services", value: "services" },
          { title: "Membership", value: "membership" },
          { title: "Recovery Hub", value: "recovery-hub" },
          { title: "Pricing", value: "pricing" },
          { title: "Contact", value: "contact" },
          { title: "FAQs", value: "faqs" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Leave blank to use the default site name",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      rows: 3,
    }),
  ],
});
