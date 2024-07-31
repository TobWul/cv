import { SlideType } from "@/types";
import Image from "next/image";
import { type ReactElement } from "react";
import { Prose } from "../Prose";
import { useI18n } from "@/hooks";
import { LanguageSwitch } from "../LanguageSwitch";

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

export function Slide({ id, metadata, content }: SlideType): ReactElement {
  const { t } = useI18n();
  if (metadata.type === "image") {
    return <PresentationSlide image={metadata.image} id={id} />;
  }

  return (
    <div
      id={id}
      className="grid grid-cols-2 gap-48 items-center snap-center min-h-[70vh] relative max-w-page mx-auto"
    >
      <Prose>
        <LanguageSwitch />
        <h1 className="mt-24">
          {t({ no: "CV og portefølje", en: "CV and portfolio" })}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Prose>
      <div className="height-full sticky">
        <Image
          src={`/sketches/${metadata.image}`}
          width={1080}
          height={1080}
          alt="Illustration"
        />
      </div>
    </div>
  );
}
