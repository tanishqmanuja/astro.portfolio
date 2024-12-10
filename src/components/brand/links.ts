export const BRAND_LINK_MAP: Record<string, string> = {
  react: "https://react.dev/",
  astro: "https://astro.build/",
  angular: "https://angular.dev/",
  ionic: "https://ionicframework.com/",
  capacitor: "https://capacitorjs.com/",
  pdfmake: "https://pdfmake.org/",
  node: "https://nodejs.org/en/",
  bun: "https://bun.sh/",
  cheerio: "https://cheerio.js.org/",
  elysia: "https://elysiajs.com/",
  zustand: "https://zustand.docs.pmnd.rs/",
  arduino: "https://www.arduino.cc/",
  go: "https://go.dev/",
  rxjs: "https://rxjs.dev/",
  axios: "https://axios-http.com/",
  vite: "https://vitejs.dev/",
  drizzle: "https://orm.drizzle.team/",
  zod: "https://zod.dev/",
  matter: "https://csa-iot.org/all-solutions/matter/",
  espressif: "https://www.espressif.com/",
  esp32: "https://www.espressif.com/en/products/socs/esp32",
  "c++": "https://isocpp.org/",
};

export function getBrandLink(brand: string): string {
  return BRAND_LINK_MAP[brand.toLowerCase()];
}
