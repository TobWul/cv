import CvContent, { CvProps } from "@/components/cv/CvContent";
import { Slide } from "@/components/portfolio";
import { startContent } from "@/content/start";
import { useI18n } from "@/hooks";
import { SlideType } from "@/types";
import { getSlideData } from "@/utils/getSlideData";
import { queries } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityClient";
import { GetStaticProps } from "next/types";

export default function Home({
  start,
  cvData,
}: {
  start: { en: string; no: string };
  cvData: CvProps;
}) {
  const { t } = useI18n();
  return (
    <div className="mx-auto">
      <div id="toc">
        <Slide
          id="start"
          content={t(start)}
          metadata={{ image: "hello.png" }}
        />
        <CvContent data={cvData} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  cvData: CvProps;
  start: { en: string; no: string };
}> = async () => {
  delete queries.portfolio;

  const query = `{${Object.values(queries).join(",")}}`;
  const cvData = await sanityClient.fetch(query);

  const start = await startContent();

  return { props: { start, cvData } };
};
