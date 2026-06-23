import { defineType, defineField } from "sanity";

export default defineType({
  name: "promoPopup",
  title: "Promo Popup",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      title: "Enabled",
      type: "boolean",
      description: "Turn the promo popup on or off",
    }),
    defineField({
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "e.g. Intro Offer · New Members Only",
    }),
    defineField({
      name: "headline",
      title: "Headline Price",
      type: "string",
      description: "e.g. $50",
    }),
    defineField({
      name: "headlineLabel",
      title: "Headline Label",
      type: "string",
      description: "e.g. 5 sessions",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "features",
      title: "Feature Bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
      description: "e.g. /membership#book",
    }),
    defineField({
      name: "disclaimer",
      title: "Disclaimer Text",
      type: "string",
      description: "e.g. New members only · Limited availability",
    }),
  ],
});
