import classNames from "classnames";
import { Image } from "components/Image";
import { SanityImageType } from "packages/types";
import * as React from "react";

interface ProjectImagePreviewProps {
  name: string;
  image: SanityImageType;
}

export const ProjectImagePreview: React.FC<ProjectImagePreviewProps> = ({
  name,
  image,
}) => {
  if (!image) return null;
  const borderClass =
    "absolute bg-gray-300 transition-transform duration-200 will-change-transform";
  const size = {
    x: "w-full h-2 left-0 scale-x-0 group-hover:scale-x-100",
    y: "h-full w-2  top-0 scale-y-0 group-hover:scale-y-100",
  };
  return (
    <div className="group-hover:opacity-100 w-256 md:w-385 lg:w-512 opacity-0 absolute mt-4 top-full left-0 pointer-events-none">
      <Image
        image={image}
        alt={name}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
      />
      <div
        className={classNames("top-0 origin-left ease-in", borderClass, size.x)}
      />
      <div
        className={classNames(
          "right-0 origin-top delay-200 ease-out",
          size.y,
          borderClass
        )}
      />
      <div
        className={classNames(
          "bottom-0 origin-left delay-200 ease-out",
          size.x,
          borderClass
        )}
      />
      <div
        className={classNames("left-0 origin-top ease-in", size.y, borderClass)}
      />
    </div>
  );
};
