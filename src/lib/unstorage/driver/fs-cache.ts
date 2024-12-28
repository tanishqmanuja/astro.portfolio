import fsLiteDriver, { type FSStorageOptions } from "unstorage/drivers/fs-lite";

import { normalize, type Duration } from "@/utils/duration";

export interface FSCacheStorageOptions extends FSStorageOptions {
  freshness?: Duration;
}

const DRIVER_NAME = "fs-cache";
const DEFAULT_EXPIRATION = "30m";

export const fsCacheDriver = (options: FSCacheStorageOptions = {}) => {
  const driver = fsLiteDriver(options);
  const freshness = normalize(options.freshness ?? DEFAULT_EXPIRATION);

  return {
    ...driver,
    name: DRIVER_NAME,
    options,
    async getItem(key: string, opts: { freshness?: Duration } = {}) {
      const item = await driver.getItem(key);

      if (item === null || item === undefined) {
        return item;
      }

      const meta = await driver.getMeta?.(key, {});

      if (meta === null || meta === undefined || meta.mtime === undefined) {
        return item;
      }

      const etime = opts.freshness ? normalize(opts.freshness) : freshness;

      if (Date.now() - new Date(meta.mtime).getTime() < etime) {
        return item;
      }

      if (!options.noClear) {
        await driver.removeItem?.(key, {});
      }
    },
  };
};
