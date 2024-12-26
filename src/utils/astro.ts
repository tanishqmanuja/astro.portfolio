import type { CollectionEntry, CollectionKey } from "astro:content";

export type CollectionEntryReference<Key extends CollectionKey> = {
  collection: Key;
  id: CollectionEntry<Key>["id"];
};
