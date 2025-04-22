import { URL as SITE_URL } from "@/site.config";

export function site(url: string = ""): string {
  return new URL(url, SITE_URL).href;
}
