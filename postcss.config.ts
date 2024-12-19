import postcssGlobalData from "@csstools/postcss-global-data";
import OpenProps from "open-props";
import type { AcceptedPlugin } from "postcss";
import postcssCustomMedia from "postcss-custom-media";
import postcssJitProps from "postcss-jit-props";
import postcssUtopia from "postcss-utopia";

export default {
  plugins: [
    postcssGlobalData({
      files: ["./node_modules/open-props/media.min.css"],
    }),
    postcssJitProps({
      ...OpenProps,
      layer: "openprops",
    }),
    postcssUtopia({
      minWidth: 320,
      maxWidth: 1080,
    }),
    postcssCustomMedia(),
  ],
} satisfies {
  plugins: AcceptedPlugin[];
};
