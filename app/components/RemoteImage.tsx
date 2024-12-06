import { ComponentProps } from "react";
import { Image } from "@unpic/react";
import { useMemo } from "react";
type RemoteImageProps = ComponentProps<typeof Image> & {
  altText?: string;
};

export default function RemoteImage({ altText, ...props }: RemoteImageProps) {
  return <Image {...props} alt={altText ?? props.alt} />;
}
