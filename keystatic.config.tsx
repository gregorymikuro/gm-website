import { config, fields } from "@keystatic/core";
import { site } from "~/constants/config";
import collections from "~/keystatic/collections";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  ui: {
    brand: {
      name: site.title,
    },
  },
  storage: {
    kind: "local",
  },
  collections,
});
