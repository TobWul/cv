import { ProjectType } from "@/types";
import classNames from "classnames";
import { Image } from "@/components/Image";
import Link from "next/link";
import * as React from "react";

type ProjectLinkProps = Pick<ProjectType, "mainImage" | "slug"> & {
  className?: string;
  children: React.ReactNode;
  alt: string;
};

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  children,
  alt,
  className,
  slug,
  mainImage,
}) => {
  const borderClass =
    "absolute bg-gray-300 transition-transform duration-200 will-change-transform";
  const size = {
    x: "w-full h-2 left-0 scale-x-0 group-hover:scale-x-100",
    y: "h-full w-2  top-0 scale-y-0 group-hover:scale-y-100",
  };
  return (
    <Link
      href={`project/${slug.current}`}
      className={`group relative underline underline-offset-2 underline-gray-200 ${className}`}
    >
      {children}
      {mainImage && (
        <div className="group-hover:opacity-100 w-256 md:w-385 lg:w-512 opacity-0 z-10 absolute mt-4 top-full left-0 pointer-events-none">
          <Image
            image={mainImage}
            alt={alt}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
          />
          <div
            className={classNames(
              "top-0 origin-left ease-in",
              borderClass,
              size.x,
            )}
          />
          <div
            className={classNames(
              "right-0 origin-top delay-200 ease-out",
              size.y,
              borderClass,
            )}
          />
          <div
            className={classNames(
              "bottom-0 origin-left delay-200 ease-out",
              size.x,
              borderClass,
            )}
          />
          <div
            className={classNames(
              "left-0 origin-top ease-in",
              size.y,
              borderClass,
            )}
          />
        </div>
      )}
    </Link>
  );
};
