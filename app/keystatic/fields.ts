import { fields } from "@keystatic/core";

export function UnpicImageFields() {
  return {
    src: fields.text({
      label: "Image URL",
      validation: {
        length: {
          min: 1,
        },
      },
    }),
    altText: fields.text({ label: "Alt text", defaultValue: "" }),
    width: fields.number({
      label: "Width",
    }),
    height: fields.number({
      label: "Height",
    }),
    layout: fields.select({
      label: "Layout",
      options: [
        { label: "Full Width", value: "fullWidth" },
        { label: "Constrained", value: "constrained" },
        { label: "Fixed", value: "fixed" },
      ],
      defaultValue: "constrained",
    }),
    priority: fields.checkbox({
      label: "Priority",
      defaultValue: false,
    }),
    background: fields.text({
      label: "Background",
      description: "It accepts image URLs, colors, gradients and CSS",
      defaultValue: "auto",
    }),
  };
}
