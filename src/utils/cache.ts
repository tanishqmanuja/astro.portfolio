import { createStorage, type StorageValue } from "unstorage";
import { fsCacheDriver } from "./unstorage/driver/fs-cache";

const CACHE_DIR = ".cache";

export const cache = createStorage({
  driver: fsCacheDriver({ base: CACHE_DIR, freshness: "1d" }),
});

export async function cached<T extends StorageValue>(
  key: string,
  fn: () => Promise<T>
): Promise<T> {
  if (import.meta.env.PROD) {
    return fn();
  }

  const cachedValue = await cache.getItem<T>(key);

  if (cachedValue) {
    return cachedValue;
  }

  const newValue = await fn();
  await cache.setItem(key, newValue);
  return newValue;
}
