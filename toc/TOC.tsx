import { useScroll } from "./useScroll";
import { SlideType } from "@/types";
import { type ReactElement } from "react";

export interface TOCProps {
  slides: SlideType[];
}

const Tick = ({ active, targetId }: { active: boolean; targetId: string }) => {
  return (
    <a href={`#${targetId}`} className="py-4 group" tabIndex={-1}>
      <div
        className={[
          "w-24 h-2 bg-gray-400 block transform scale-x-75 group-hover:scale-x-100 group-hover:bg-gray-600 transition-all origin-right",
          active && "bg-gray-900 scale-x-100",
        ].join(" ")}
      />
    </a>
  );
};

export function TOC(): ReactElement {
  const { activeSlide, elements } = useScroll();

  return (
    <div className="fixed flex flex-col items-right right-24 top-1/3 z-50">
      {elements?.map(({ id }) => (
        <Tick active={activeSlide === id} targetId={id} key={id} />
      ))}
    </div>
  );
}
