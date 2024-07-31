import groq from "groq";
import { GetStaticProps } from "next";
import { ProjectType, SanitySlugType } from "@/types";
import * as React from "react";
import { sanityClient } from "@/utils/sanityClient";
import { ProjectSlide } from "@/components/portfolio/ProjectSlide";
import { renderDate } from "@/utils/renderDate";
import { useI18n } from "@/hooks";
import { LanguageSwitch } from "@/components/LanguageSwitch";

interface ProjectPortfolioPageProps extends ProjectType {}

export const ProjectPortfolioPage: React.FC<ProjectPortfolioPageProps> = ({
  name,
  introduction,
  slides,
  startDate,
  endDate,
}) => {
  const { t, locale } = useI18n();
  return (
    <main className="">
      <header className="max-w-screen-lg min-h-[40vh] mx-auto flex items-center p-24 pt-64 ">
        <div>
          <LanguageSwitch />
          <h1 className="my-16">{t(name)}</h1>
          <p>{t(introduction)}</p>
          <p className="text-label mt-16 font-sans text-secondary">
            {renderDate({ startDate, endDate, language: locale })}
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

  return {
    paths: result.flatMap((path: object) => [
      { ...path, locale: "en" },
      { ...path, locale: "no" },
    ]),
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
