import { useCallback, useEffect, useState } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import PrevButton from "@/components/PrevButton";
import NextButton from "@/components/NextButton";
import { usePrevNextButtons } from "@/hooks/usePrevNextButtons";
import useEmblaCarousel from "embla-carousel-react";
import SpotlightCard from "@/components/SpotlightCard";

type PropType = {
  slides: {
    name: string;
    title: string;
    description?: string;
    image: string;
  }[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel(props: PropType) {
  const { slides, options } = props;

  const emblaOptions: EmblaOptionsType = {
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
    skipSnaps: false,
    ...options,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions);
  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((api: { scrollProgress: () => number }) => {
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
  }, [emblaApi, onScroll]);

  const leftFadeOpacity = Math.min(1, scrollProgress * 4);
  const rightFadeOpacity = Math.min(1, (1 - scrollProgress) * 4);

  return (
    <div className="embla w-full relative">
      <div
        className="embla__viewport overflow-hidden relative"
        ref={emblaRef}
        style={{
          maskImage: `linear-gradient(to right, 
            ${leftFadeOpacity > 0 ? `rgba(0,0,0,${1 - leftFadeOpacity}) 0%, black 64px` : "black 0%"}, 
            black, 
            ${rightFadeOpacity > 0 ? `black calc(100% - 64px), rgba(0,0,0,${1 - rightFadeOpacity}) 100%` : "black 100%"})`,
          WebkitMaskImage: `linear-gradient(to right, 
            ${leftFadeOpacity > 0 ? `rgba(0,0,0,${1 - leftFadeOpacity}) 0%, black 64px` : "black 0%"}, 
            black, 
            ${rightFadeOpacity > 0 ? `black calc(100% - 64px), rgba(0,0,0,${1 - rightFadeOpacity}) 100%` : "black 100%"})`,
        }}
      >
        <div className="embla__container flex gap-4 p-4 cursor-grab active:cursor-grabbing select-none">
          {slides.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="embla__slide flex-none select-none"
            >
              <SpotlightCard className="flex flex-col mx-2 w-64 lg:w-72 items-center p-4 border-gray-400 shadow-gray-500 shadow-lg bg-slate-700/10 flex-shrink-0 h-full select-none">
                <div className="text-center text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
                  {item.name}
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg w-40 lg:w-48"
                />
                <div className="text-center text-md lg:text-lg font-medium mt-2">
                  {item.title}
                </div>
                <div className="text-center text-sm lg:text-md text-gray-400 mt-2">
                  {item.description}
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors z-10"
      />

      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-700/80 hover:bg-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors z-10"
      />
    </div>
  );
}
