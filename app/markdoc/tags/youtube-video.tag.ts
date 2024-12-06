import { Schema } from "@markdoc/markdoc";

export default {
  render: "YoutubeEmbed",
  attributes: {
    videoId: {
      type: String,
      required: true,
    },
  },
} satisfies Schema;
