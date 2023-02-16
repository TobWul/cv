import { AnimateOnScroll } from "components/AnimateOnScroll";
import { Image } from "components/Image";
import { useI18n } from "packages/i18n";
import { PortfolioSlideType, ProjectType } from "packages/types";
import * as React from "react";

interface ProjectSlideProps extends PortfolioSlideType {}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({
  title,
  text,
  image,
  position,
}) => {
  const { t } = useI18n();
  return (
    <AnimateOnScroll reappear animation="slide" threshold={0.6}>
      <div className="relative snap-center">
        <Image
          image={image}
          alt="text"
          className="max-h-[95vh] w-auto mx-auto object-fit"
          sizes="(max-width: 1080px) 100vw, 1920px"
        />
        <div className="[.group_&]:translate-x-0 [.group_&]:opacity-100 delay-200 duration-500 shadow-lg md:translate-x-48 opacity-0 md:absolute left-0 bottom-64 bg-gray-50 p-24 max-w-md transition-all">
          <h2>{t(title)}</h2>
          <p>{t(text)}</p>
        </div>
      </div>
    </AnimateOnScroll>
  );
};
