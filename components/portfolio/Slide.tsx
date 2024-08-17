import { SlideType } from "@/types";
import Image from "next/image";
import { type ReactElement } from "react";
import { Prose } from "../Prose";
import { useI18n } from "@/hooks";
import { LanguageSwitch } from "../LanguageSwitch";
import { BlockContent } from "../BlockContent";
import { Image as SanityImage } from "../Image";

const PresentationSlide = ({ id, image }: { id: string; image: string }) => {
  return (
    <div id={id} className="p-24 bg-gray-100 max-h-screen">
      <Image
        src={`/sketches/${image}`}
        width={1920}
        height={1080}
        alt="Illustration"
      />
    </div>
  );
};

export function Slide({
  id,
  metadata,
  content,
  companySlug,
}: SlideType): ReactElement {
  const { t } = useI18n();
  if (metadata.type === "image") {
    return <PresentationSlide image={metadata.image} id={id} />;
  }

  return (
    <div
      id={id}
      className="md:px-64 py-24 px-48 md:grid grid-cols-2 gap-48 items-center snap-center min-h-[70vh] relative max-w-page mx-auto"
    >
      <div>
        <div className="mb-16">
          <LanguageSwitch />
        </div>
        <Prose>
          <BlockContent blocks={t(content)} companySlug={companySlug} />
        </Prose>
      </div>
      <div className="height-full sticky">
        {typeof metadata.image === "string" ? (
          <Image
            src={`/sketches/${metadata.image}`}
            width={1080}
            height={1080}
            alt="Illustration"
          />
        ) : (
          <SanityImage image={metadata.image} />
        )}
      </div>
    </div>
  );
}
