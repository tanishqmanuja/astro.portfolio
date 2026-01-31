import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

export function serializeEmblaOptions(options: EmblaOptionsType) {
  return JSON.stringify(options);
}

export function deserializeEmblaOptions(
  options: string,
  fallbackOptions: EmblaOptionsType = {},
) {
  let emblaOptions: EmblaOptionsType = fallbackOptions;

  try {
    emblaOptions = JSON.parse(options);
  } catch {
    console.warn(
      "[EmblaCarousel]: Invalid options provided. Using default options.",
    );
  }

  return emblaOptions;
}

interface EmblaHTMLElement extends HTMLElement {
  __emblaApi?: EmblaCarouselType;
}

export function isEmblaElement(element: Element): element is EmblaHTMLElement {
  return "__emblaApi" in element;
}

export function setEmblaApi(element: HTMLElement, api: EmblaCarouselType) {
  (element as EmblaHTMLElement).__emblaApi = api;
}

export function getEmblaApi(element: Element): EmblaCarouselType | undefined {
  return isEmblaElement(element) ? element.__emblaApi : undefined;
}
