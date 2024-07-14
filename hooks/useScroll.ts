import { useEffect, useState } from "react";

export const useScroll = () => {
  const [activeSlide, setActiveSlide] = useState<string | undefined>("start");
  const [slides, setSlides] = useState<{ id: string; top: number }[]>();

  const calculateSlidePositions = (slideElements: Element[]) =>
    slideElements.map((slideEl) => ({
      id: slideEl.id,
      top:
        slideEl.getBoundingClientRect().y +
        slideEl.getBoundingClientRect().height * 0.95 +
        document.documentElement.scrollTop,
    }));

  // Trigger rerun of scroll useEffect
  useEffect(() => {
    const handleResize = () => {
      const slideElements = Array.from(
        document.getElementById("slides-container")?.children || [],
      );

      const calculatedSlides = calculateSlidePositions(slideElements);

      setSlides(calculatedSlides);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Scroll useEffect", slides);

    const handleScroll = () => {
      const scrollDistance = document.documentElement.scrollTop;

      console.log(slides, scrollDistance);
      const slideInFocus = slides?.find((slide) => slide.top >= scrollDistance);
      setActiveSlide(slideInFocus?.id);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [slides]);

  return { slides, activeSlide };
};
