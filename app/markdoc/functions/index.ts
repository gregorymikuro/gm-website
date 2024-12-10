import { Config } from "@markdoc/markdoc";

const functions: Config["functions"] = {
  uppercase: {
    transform(parameters) {
      const value = parameters[0];
      return typeof value === "string" ? value.toUpperCase() : value;
    },
  },
};

export default functions;
