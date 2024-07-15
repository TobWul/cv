import groq from "groq";
import { GetStaticProps } from "next";
import { ProjectType, SanitySlugType } from "@/types";
import * as React from "react";
import { sanityClient } from "@/utils/sanityClient";
import { ProjectSlide } from "@/components/portfolio/ProjectSlide";
import { renderDate } from "@/utils/renderDate";

interface ProjectPortfolioPageProps extends ProjectType {}

export const ProjectPortfolioPage: React.FC<ProjectPortfolioPageProps> = ({
  name,
  introduction,
  slides,
  startDate,
  endDate,
}) => {
  return (
    <main className="">
      <header className="max-w-screen-lg min-h-[40vh] mx-auto flex items-center p-24 pt-64 ">
        <div>
          <h1 className="mb-16">{name.no}</h1>
          <p>{introduction.no}</p>
          <p className="text-label mt-16 font-sans text-secondary">
            {renderDate(startDate, endDate)}
          </p>
        </div>
      </header>

      <div className="space-y-24 p-24 pt-64 bg-gray-900" id="toc">
        {slides.map((slide) => (
          <ProjectSlide {...slide} key={slide._id} />
        ))}
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const result = (
    await sanityClient.fetch(
      groq`*[_type == "project" && defined(slug.current)].slug { current }`,
    )
  ).map((slug: SanitySlugType) => ({
    params: {
      project: slug.current,
    },
  }));

  console.log(result);

  return {
    paths: result,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (data) => {
  const query = `*[_type == "project" && slug.current == $projectName]{
    ...,
    mainImage{
      ...,
      asset->{
        ...,
        metadata {
          ...,
          lqip
        }
      }
    },
    slides[]{
      ...,
      image{
        ...,
        asset->{
          ...,
          metadata {
            ...,
            lqip
          }
        }
      }
    }
  }[0]`;

  return {
    props: await sanityClient.fetch(query, {
      projectName: data.params?.project,
    }),
  };
};

export default ProjectPortfolioPage;
