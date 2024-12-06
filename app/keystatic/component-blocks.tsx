import { fields } from "@keystatic/core";
import {
  block,
  type ContentComponent,
} from "@keystatic/core/content-components";

import YoutubeEmbed from "~/components/YoutubeEmbed";
import { UnpicImageFields } from "./fields";

const customComponents: Record<string, ContentComponent> = {
  youtubeVideo: block({
    label: "Youtube Video",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-youtube"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
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
  remoteImage: block({
    label: "Remote Image",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-images"
      >
        <path d="M18 22H4a2 2 0 0 1-2-2V6" />
        <path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
        <circle cx="12" cy="8" r="2" />
        <rect width="16" height="16" x="6" y="2" rx="2" />
      </svg>
    ),
    schema: {
      ...UnpicImageFields(),
    },
    ContentView: ({ value: { altText, width, height, ...props } }) => {
      return (
        <img
          {...props}
          {...(props.layout !== "fullWidth" && width ? { width } : {})}
          height={height || undefined}
        />
      );
    },
  }),
};

export default customComponents;
