import * as React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { SanityImageType } from "@/types";
import { sanityClient } from "@/utils/sanityClient";

interface ImageProps {
  image: SanityImageType;
  alt?: string;
  className?: string;
  aspectRatio?: number;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({
  image,
  alt,
  className,
  aspectRatio,
  sizes = "(max-width: 800px) 100vw, 800px",
}) => {
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: (imageUrlBuilder, options) => {
      const builder: any = imageUrlBuilder
        .width(
          options.width ||
            Math.min(options.originalImageDimensions.width, 1920),
        )
        .quality(options.quality || 75)
        .fit("clip")
        .auto("format");

      return aspectRatio
        ? builder.height(
            (options.width ||
              Math.min(options.originalImageDimensions.width, 1920)) *
              aspectRatio,
          )
        : builder;
    },
  });

  if (!image) return null;

  return (
    <Img
      className={["select-none object-fill", className].join(" ")}
      alt={alt ?? image.asset.altText}
      // @ts-ignore
      {...imageProps}
      sizes={sizes}
      // @ts-ignore
      width={imageProps.width}
      blurDataURL={image.asset.metadata?.lqip}
    />
  );
};
