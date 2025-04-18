import { readFileSync } from "fs";
import { extname, resolve } from "path";

import xxhash from "xxhash-wasm";

const { h64ToString } = await xxhash();

const ASSETS_DIR = "_astro";

export function getHashedFontPath(file: string): string {
  const path = resolve(file);
  const content = readFileSync(path);
  return ASSETS_DIR + "/fonts/" + h64ToString(path + content) + extname(file);
}
