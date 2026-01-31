import PhotoSwipeLightbox from "photoswipe/lightbox";

import { getEmblaApi } from "./utils";

export function initPhotoSwipeLightbox() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: ".embla__container",
    children: ".embla__slide a",
    pswpModule: () => import("photoswipe"),
    bgClickAction: "close",
  });

  lightbox.addFilter("clickedIndex", (clickedIndex, e) => {
    const target = e.target as HTMLElement;

    const isPswpEl =
      e.target instanceof HTMLAnchorElement &&
      target.matches("[data-pswp-src]");
    const isInsidePswpEl = !!target.closest("[data-pswp-src]");

    if (!isPswpEl && !isInsidePswpEl) return -1;

    const galleryEl = target.closest(".embla");
    if (!galleryEl) return clickedIndex;

    const emblaApi = getEmblaApi(galleryEl);

    if (emblaApi) {
      const clickedSlide = target.closest(".embla__slide");
      const slides = Array.from(galleryEl.querySelectorAll(".embla__slide"));
      const actualIndex = slides.indexOf(clickedSlide!);

      const isSelected = actualIndex === emblaApi.selectedSnap();

      if (!isSelected) {
        emblaApi.goTo(actualIndex);

        return -1;
      }
    }

    return clickedIndex;
  });

  lightbox.init();
  lightbox.on("change", () => {
    const pwsp = lightbox.pswp;
    if (!pwsp) return;

    const index = pwsp.currIndex;
    const galleryEl = pwsp.currSlide?.data.element?.closest(".embla");
    if (!galleryEl) return;

    const emblaApi = getEmblaApi(galleryEl);
    if (!emblaApi) return;

    pwsp.isOpen && emblaApi.goTo(index);
  });

  return lightbox;
}
