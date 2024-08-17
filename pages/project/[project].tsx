import groq from "groq";
import { GetStaticProps } from "next";
import { ProjectType, SanitySlugType } from "@/types";
import * as React from "react";
import { sanityClient } from "@/utils/sanityClient";
import { ProjectPage } from "@/components/portfolio/ProjectPage";
import { projectQuery } from "@/utils/queries";

interface ProjectPortfolioPageProps {
  project: ProjectType;
}

export const ProjectPortfolioPage: React.FC<ProjectPortfolioPageProps> = ({
  project,
}) => {
  return <ProjectPage project={project} />;
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
  const project = await sanityClient.fetch(projectQuery, {
    projectName: data.params?.project,
  });
  return {
    props: { project },
  };
};

export default ProjectPortfolioPage;
