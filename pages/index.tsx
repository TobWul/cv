import CvContent, { CvProps } from "@/components/cv/CvContent";
import { Slide } from "@/components/portfolio";
import { SlideType } from "@/types";
import { getSlideData } from "@/utils/getSlideData";
import { queries } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityClient";
import { GetStaticProps } from "next/types";

export default function Home({
  slides,
  cvData,
}: {
  slides: SlideType[];
  cvData: CvProps;
}) {
  return (
    <div className="mx-auto">
      <div id="toc">
        {slides.map((slide) => (
          <Slide {...slide} key={slide.id} />
        ))}
        <CvContent data={cvData} />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  cvData: CvProps;
  slides: SlideType[];
}> = async () => {
  delete queries.portfolio;

  const slides = await getSlideData("start");
  const query = `{${Object.values(queries).join(",")}}`;

  const cvData = await sanityClient.fetch(query);

  console.log(cvData);

  return { props: { slides, cvData } };
};
