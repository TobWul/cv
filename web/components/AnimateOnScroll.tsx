import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  reappear?: boolean;
  threshold?: number;
  animation?: "fade" | "slide" | "background-fade";
  index?: number;
  childDelay?: number;
};

type Options = {
  threshold: number;
  reappear?: boolean;
};

const useElementOnScreen = (
  options: Options
): [React.RefObject<HTMLDivElement>, boolean] => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const makeAppear = (entries: any) => {
    const [entry] = entries;
    if (entry.isIntersecting) setIsVisible(true);
  };

  const makeAppearRepeating = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const callBack = options.reappear ? makeAppearRepeating : makeAppear;

  useEffect(() => {
    const containerRefCurrent = containerRef.current;
    const observer = new IntersectionObserver(callBack, options);
    if (containerRefCurrent) observer.observe(containerRefCurrent);

    return () => {
      if (containerRefCurrent) {
        observer.unobserve(containerRefCurrent);
      }
    };
  }, [containerRef, options, callBack]);

  return [containerRef, isVisible];
};

export const AnimateOnScroll = ({
  children,
  reappear,
  threshold = 0.5,
  childDelay = 50,
  index,
  animation = "fade",
}: Props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: threshold,
    reappear: reappear,
  });

  const animations = {
    fade: classNames(
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24",
      "duration-500"
    ),
    slide: classNames(
      isVisible
        ? "group opacity-100 translate-x-0 scale-100"
        : "opacity-20 [&>div]:blur-sm translate-x-64 scale-95",
      "duration-500 [&>div]:transition-all"
    ),
    "background-fade": classNames(
      isVisible ? "bg-gray-600" : "bg-gray-100 ",
      "duration-1000 ease-in-out"
    ),
  };

  return (
    <div
      ref={containerRef}
      style={{
        transitionDelay: `${index ? childDelay * index : 0}ms`,
      }}
      className={classNames(
        "transition-all if-motion-reduce ",
        animations[animation]
      )}
    >
      {children}
    </div>
  );
};
