import { Slide } from "@/components/Slide";
import { TOC } from "@/components/TOC";
import { SlideType } from "@/types";
import { getSlideData } from "@/utils/getSlideData";

export default function Home({ slides }: { slides: SlideType[] }) {
  return (
    <div className="snap-mandatory snap-y px-64 max-w-1536 mx-auto">
      <TOC slides={slides} />
      <div id="slides-container">
        {slides.map((slide) => (
          <Slide {...slide} key={slide.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getSlideData();
  return { props: { slides: data } };
}
