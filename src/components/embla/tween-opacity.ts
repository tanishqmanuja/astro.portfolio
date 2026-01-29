import type {
  EmblaCarouselType,
  EmblaEventListType,
  EmblaEventModelType,
} from "embla-carousel";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const tweenOpacity = <EventType extends keyof EmblaEventListType>(
  emblaApi: EmblaCarouselType,
  event?: EmblaEventModelType<EventType>,
): void => {
  const engine = emblaApi.internalEngine();
  const scrollProgress = emblaApi.scrollProgress();
  const slidesInView = emblaApi.slidesInView();
  const isScrollEvent = event?.type === "scroll";
  const tweenFactor = TWEEN_FACTOR_BASE * emblaApi.snapList().length;

  emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
    let diffToTarget = scrollSnap - scrollProgress;
    const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex];

    slidesInSnap.forEach((slideIndex) => {
      if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();

          if (slideIndex === loopItem.index && target !== 0) {
            const sign = Math.sign(target);

            if (sign === -1) {
              diffToTarget = scrollSnap - (1 + scrollProgress);
            }
            if (sign === 1) {
              diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          }
        });
      }

      const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor);
      const opacity = numberWithinRange(tweenValue, 0, 1).toString();
      emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
    });
  });
};

export const setupTweenOpacity = (emblaApi: EmblaCarouselType): void => {
  tweenOpacity(emblaApi);

  emblaApi
    .on("reinit", tweenOpacity)
    .on("scroll", tweenOpacity)
    .on("slidefocus", tweenOpacity);
};
