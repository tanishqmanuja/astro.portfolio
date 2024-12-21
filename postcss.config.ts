import OpenProps from "open-props";
import type { AcceptedPlugin } from "postcss";
import postcssJitProps from "postcss-jit-props";

type PostCssConfig = {
  plugins: AcceptedPlugin[];
};

export default {
  plugins: [
    postcssJitProps({
      ...OpenProps,
      layer: "openprops",
    }),
  ],
} satisfies PostCssConfig;
