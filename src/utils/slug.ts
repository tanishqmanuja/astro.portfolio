/**
 * Removes leading number from slug string
 *
 * @example
 * slugify("1-foo") => "foo"
 */
export function slugify(slug: string): string {
  return slug.replace(/^\d+-/, "");
}
