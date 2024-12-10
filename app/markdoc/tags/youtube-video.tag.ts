import { Schema } from "@markdoc/markdoc";

export const YoutubeVideoTag: Schema = {
  render: "YoutubeEmbed",
  attributes: {
    videoId: {
      type: String,
      required: true,
    },
  },
};
