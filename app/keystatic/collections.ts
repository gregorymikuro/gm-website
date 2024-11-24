import { collection, fields } from "@keystatic/core";

const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "app/content/posts/*",
  format: { contentField: "content" },
  columns: ["title", "description", "publishedDate", "isPublished"],
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    description: fields.text({ label: "Description" }),
    publishedDate: fields.date({ label: "Published date" }),
    isPublished: fields.checkbox({ label: "Published", defaultValue: false }),
    content: fields.markdoc({ label: "Content" }),
  },
});

export default { posts };
