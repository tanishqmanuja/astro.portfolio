import OpenProps from "open-props";
import type { Plugin } from "postcss";
import postcssJitProps from "postcss-jit-props";

// import postcssUtopia from "postcss-utopia";

const postcssUtopia = require("postcss-utopia");

export default {
  plugins: [
    postcssJitProps({
      ...OpenProps,
      layer: "openprops",
    }),
    postcssUtopia({
      minWidth: 320,
      maxWidth: 1080,
    }),
  ],
} satisfies {
  plugins: Plugin[];
};
