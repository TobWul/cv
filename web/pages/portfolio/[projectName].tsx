import { AnimateOnScroll } from "components/AnimateOnScroll";
import { ProjectSlide } from "components/Project/ProjectSlide";
import groq from "groq";
import { GetStaticProps } from "next";
import { formatDateRange } from "packages/dateHandling";
import { useI18n } from "packages/i18n";
import client from "packages/sanity";
import { queries } from "packages/sanity/queries";
import { ProjectType, SanitySlugType } from "packages/types";
import * as React from "react";
import { LocaleStringType } from "../../../studio/languages";

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
    <div className="max-w-screen overflow-x-hidden">
      <header className="max-w-screen-lg min-h-[40vh] mx-auto mt-48 flex items-center p-24">
        <div>
          <h1 className="mb-16">{t(name)}</h1>
          <p>{t(introduction)}</p>
          <p className="text-label mt-16">
            {/* @ts-ignore */}
            {formatDateRange(startDate, endDate, locale)}
          </p>
        </div>
      </header>

      <div className="space-y-24 p-24 pt-64 bg-gray-600">
        {slides.map((slide) => (
          <ProjectSlide {...slide} key={slide._id} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const result = (await client.fetch(groq`*[_type == "project"].slug`)).filter(
    (slug: any) => slug
  );

  return {
    paths: [
      ...result.map((slug: SanitySlugType) => ({
        params: { projectName: slug.current },
        locale: "en",
      })),
      ...result.map((slug: SanitySlugType) => ({
        params: { projectName: slug.current },
        locale: "no",
      })),
    ],
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
    props: await client.fetch(query, { projectName: data.params?.projectName }),
  };
};

export default ProjectPortfolioPage;
