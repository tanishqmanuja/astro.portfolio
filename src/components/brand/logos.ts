export const MANUAL_LOGO_MAP: Record<string, string> = {
  zustand: "bear",
  pdfmake: "pdf",
  cheerio: "package",
};

const manualLogos = Object.keys(MANUAL_LOGO_MAP);
const localLogos = Object.keys(import.meta.glob("../../logos/*.svg")).map(
  (path) => path.split("/").pop()!.split(".")[0],
);

const availableLogos = new Set([...manualLogos, ...localLogos]);

export function hasIcon(brand: string) {
  const logo = MANUAL_LOGO_MAP[brand] ?? brand;
  return availableLogos.has(logo.toLowerCase());
}
