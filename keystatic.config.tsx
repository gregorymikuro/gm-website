import { config, fields } from "@keystatic/core";
import { site } from "~/constants/config";
import collections from "~/keystatic/schemas/collections";

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
