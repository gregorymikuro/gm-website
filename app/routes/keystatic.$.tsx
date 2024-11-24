import { makePage } from "@keystatic/remix/ui";
import config from "$/keystatic.config";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    title: "Keystatic Admin",
  },
];

export default makePage(config);
