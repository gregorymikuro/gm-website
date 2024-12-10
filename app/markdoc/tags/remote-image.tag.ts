import { Schema } from "@markdoc/markdoc";

export const RemoteImageTag: Schema = {
  render: "RemoteImage",
  attributes: {
    src: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: false,
    },
    layout: {
      type: String,
      required: false,
      default: "constrained",
      matches: ["fullWidth", "constrained", "fixed"],
    },
    width: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    priority: {
      type: Boolean,
      required: false,
    },
  },
};
