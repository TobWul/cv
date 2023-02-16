import classNames from "classnames";
import { AnimateOnScroll } from "components/AnimateOnScroll";
import Link from "next/link";
import { useI18n } from "packages/i18n";
import { ProjectType, SanityImageType } from "packages/types";
import { ProjectImagePreview } from "./ProjectImagePreview";

interface ProjectItemProps
  extends Pick<ProjectType, "name" | "slug" | "description" | "mainImage"> {
  left: number;
  width: number;
  hasContent: boolean;
  index?: number;
  highlighted: boolean;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  slug,
  description,
  mainImage,
  hasContent,
  left,
  width,
  index,
  highlighted,
}) => {
  const { t } = useI18n();
  const LinkOrDiv = Boolean(slug) ? Link : "div";
  return (
    <AnimateOnScroll index={index} childDelay={50}>
      <LinkOrDiv
        href={hasContent && slug ? `/portfolio/${slug.current}` : ""}
        style={{ left, width }}
        className={classNames(
          "group block relative font-body mt-4 whitespace-nowrap px-8 py-8 text-label",
          hasContent && slug
            ? "cursor-pointer"
            : "cursor-default pointer-events-none",
          highlighted
            ? "bg-accent-400 hover:bg-accent-500"
            : "bg-gray-200 hover:bg-gray-300"
        )}
      >
        <span>{t(name)}</span> |{" "}
        <span className="text-caption">{t(description)}</span>
        <ProjectImagePreview name={t(name)} image={mainImage} />
      </LinkOrDiv>
    </AnimateOnScroll>
  );
};
