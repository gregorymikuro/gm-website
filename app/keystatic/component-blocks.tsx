import { fields } from "@keystatic/core";
import {
  block,
  type ContentComponent,
} from "@keystatic/core/content-components";

import YoutubeEmbed from "~/components/YoutubeEmbed";

const customComponents: Record<string, ContentComponent> = {
  youtubeVideo: block({
    label: "Youtube Video",
    schema: {
      videoId: fields.text({
        label: "Youtube Video ID",
        description: "The ID of the video you want to embed (not full URL)",
        validation: {
          length: {
            min: 1,
          },
        },
      }),
    },
    ContentView: (props) => <YoutubeEmbed videoId={props.value.videoId} />,
  }),
};

export default customComponents;
