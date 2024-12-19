declare module "postcss-jit-props" {
  import { PluginCreator } from "postcss";

  interface JITPropsOptions {
    /**
     * Wrap the entire rule using `@layer` syntax.
     */
    layer?: string;

    /**
     * Files to use for JIT properties, globbing allowed.
     */
    files?: string[];

    /**
     * Selector the props are pushed to instead of `:root`.
     */
    custom_selector?: string;

    [key: string]: string | number;
  }

  const JITProps: PluginCreator<JITPropsOptions>;

  export default JITProps;
}
