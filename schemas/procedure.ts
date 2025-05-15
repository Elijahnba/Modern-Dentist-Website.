import { defineField, defineType } from "sanity"

export default defineType({
  name: "procedure",
  title: "Procedure",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Procedure Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Starting Price",
      type: "number",
      description: "Starting price for this procedure (leave empty if varies)",
    }),
    defineField({
      name: "duration",
      title: "Typical Duration",
      type: "string",
      description: 'e.g., "30 minutes", "1-2 hours"',
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
})
