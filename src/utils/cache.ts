import { createStorage, type StorageValue } from "unstorage";

import { fsCacheDriver } from "@/lib/unstorage/driver/fs-cache";

const CACHE_DIR = ".cache";

type CacheValue = { value: StorageValue };
export const cache = createStorage<CacheValue>({
  driver: fsCacheDriver({ base: CACHE_DIR, freshness: "1d" }),
});

type CachedOptions<T = unknown> = {
  validator?: (value: unknown) => T;
  bypass?: boolean | (() => boolean);
};

const DEAFAULT_OPTIONS = {
  bypass: import.meta.env.PROD,
} satisfies CachedOptions;

export async function cached<T extends StorageValue>(
  key: string,
  fn: () => Promise<T>,
  options?: CachedOptions<T>,
): Promise<T> {
  const o = { ...DEAFAULT_OPTIONS, ...options };

  const bypass = typeof o.bypass === "function" ? o.bypass() : o.bypass;
  if (bypass) {
    return fn();
  }

  const cachedValue = await cache.getItem(key);

  if (
    cachedValue !== null &&
    cachedValue !== undefined &&
    "value" in cachedValue
  ) {
    if (o.validator) {
      return o.validator(cachedValue.value);
    }
    return cachedValue.value as T;
  }

  const value = await fn();
  await cache.setItem(key, { value });
  return value;
}
