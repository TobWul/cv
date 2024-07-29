import { AnimateOnScroll } from "./AnimateOnScroll";
import { Image } from "@/components/Image";
import { PortfolioSlideType } from "@/types";
import * as React from "react";
import { BlockContent } from "../BlockContent";
import { Prose } from "../Prose";

interface ProjectSlideProps extends PortfolioSlideType {}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  _id,
  title,
  text,
  image,
}) => {
  return (
    <AnimateOnScroll reappear animation="slide" threshold={0.6}>
      <div className="relative snap-center" id={_id}>
        <Image
          image={image}
          alt="text"
          className="max-h-[95vh] w-auto mx-auto object-fit"
          sizes="(max-width: 1080px) 100vw, 1920px"
        />
        {text && (
          <div className="[.group_&]:translate-x-0 [.group_&]:opacity-100 delay-200 duration-500 shadow-lg md:translate-x-48 opacity-0 md:absolute left-0 bottom-64 bg-gray-50 p-24 max-w-md transition-all">
            <Prose>
              <BlockContent blocks={text.no} />
            </Prose>
          </div>
        )}
      </div>
    </AnimateOnScroll>
  );
};
