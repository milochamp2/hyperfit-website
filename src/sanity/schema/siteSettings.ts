import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Site Name",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "phoneDisplay",
      title: "Phone (Display Format)",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "suburb", title: "Suburb", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "postcode", title: "Postcode", type: "string" }),
        defineField({ name: "full", title: "Full Address", type: "string" }),
      ],
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "linktree", title: "Linktree URL", type: "url" }),
      ],
    }),
    defineField({
      name: "hours",
      title: "Access Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "zone", title: "Zone", type: "string" }),
            defineField({ name: "time", title: "Hours", type: "string" }),
          ],
        },
      ],
    }),
  ],
});
