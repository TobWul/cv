import classNames from "classnames";
import { AnimateOnScroll } from "components/AnimateOnScroll";
import { ProjectType, SanityImageType } from "packages/types";
import { ProjectImagePreview } from "./ProjectImagePreview";

type ProjectItemProps = {
  name: string;
  description: string;
  left: number;
  width: number;
  hasContent: boolean;
  index?: number;
  mainImage?: SanityImageType;
  highlighted: boolean;
};

export const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  description,
  mainImage,
  hasContent,
  left,
  width,
  index,
  highlighted,
}) => {
  return (
    <AnimateOnScroll index={index} childDelay={50}>
      <div
        style={{ left, width }}
        className={classNames(
          "group relative font-body mt-4 whitespace-nowrap px-8 py-8 text-label",
          hasContent ? "cursor-pointer" : "cursor-default pointer-events-none",
          highlighted
            ? "bg-accent-400 hover:bg-accent-500 text-base"
            : "bg-gray-200 hover:bg-gray-300"
        )}
      >
        <span>{name}</span> | <span>{description}</span>
        <ProjectImagePreview name={name} image={mainImage} />
      </div>
    </AnimateOnScroll>
  );
};
