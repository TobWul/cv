import { useEffect, useState } from "react";

export const useScroll = () => {
  const [activeSlide, setActiveSlide] = useState<string | undefined>();
  const [elements, setElements] = useState<{ id: string; top: number }[]>();

  const calculateSlidePositions = (elements: Element[]) =>
    elements.map((el) => ({
      id: el.id,
      top:
        el.getBoundingClientRect().y +
        el.getBoundingClientRect().height * 0.95 +
        document.documentElement.scrollTop,
    }));

  // Trigger rerun of scroll useEffect
  useEffect(() => {
    const handleResize = () => {
      const slideElements = Array.from(
        document.getElementById("toc")?.children || [],
      );

      const calculatedSlides = calculateSlidePositions(slideElements);

      setElements(calculatedSlides);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Scroll useEffect", elements);

    const handleScroll = () => {
      const scrollDistance = document.documentElement.scrollTop;

      console.log(elements, scrollDistance);
      const slideInFocus = elements?.find(
        (slide) => slide.top >= scrollDistance,
      );
      setActiveSlide(slideInFocus?.id);
    };
    handleScroll();

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [elements]);

  return { elements, activeSlide };
};
