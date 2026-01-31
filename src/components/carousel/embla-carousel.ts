import type { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "embla-carousel";

import { addPrevNextButtonClickHandlers } from "./scripts/enable-arrow-buttons";
import { addDotButtonAndClickHandlers } from "./scripts/enable-dot-buttons";
import { updateSelectedSnapDisplay } from "./scripts/enable-snap-count";
import { setupTweenOpacity } from "./scripts/tween-opacity";
import { getEmblaApi, setEmblaApi } from "./utils";

export function initEmblaCarousel(emblaNode: HTMLElement) {
  const viewportNode = emblaNode.querySelector(
    ".embla__viewport",
  ) as HTMLElement;
  const prevBtn = emblaNode.querySelector(
    ".embla__button--prev",
  ) as HTMLElement;
  const nextBtn = emblaNode.querySelector(
    ".embla__button--next",
  ) as HTMLElement;
  const dotsNode = emblaNode.querySelector(".embla__dots") as HTMLElement;
  const displayNode = emblaNode.querySelector(
    ".embla__selected-snap-display",
  ) as HTMLElement;

  const defaultEmblaOptions: EmblaOptionsType = { loop: true };

  let emblaApi = getEmblaApi(emblaNode);
  if (!emblaApi) {
    emblaApi = EmblaCarousel(viewportNode, defaultEmblaOptions);
    setEmblaApi(emblaNode, emblaApi);

    addPrevNextButtonClickHandlers(emblaApi, prevBtn, nextBtn);

    if (dotsNode) {
      addDotButtonAndClickHandlers(emblaApi, dotsNode);
    }

    if (displayNode) {
      updateSelectedSnapDisplay(emblaApi, displayNode);
    }

    setupTweenOpacity(emblaApi);
  }

  return emblaApi;
}
