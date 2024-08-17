import groq from "groq";
import { GetStaticPaths, GetStaticProps } from "next";
import { PortfolioType, ProjectType, SanitySlugType } from "@/types";
import * as React from "react";
import { sanityClient } from "@/utils/sanityClient";
import { ProjectPage } from "@/components/portfolio/ProjectPage";
import { projectQuery } from "@/utils/queries";

interface ProjectPortfolioPageProps {
  project: ProjectType;
  companySlug: string;
}

export const ProjectPortfolioPage: React.FC<ProjectPortfolioPageProps> = ({
  project,
  companySlug,
}) => {
  return <ProjectPage companySlug={companySlug} project={project} />;
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log("Context", context);

  const companies = await sanityClient.fetch(
    `*[_type == "portfolio"]{
        slug
      }`,
  );

  const projects = await sanityClient.fetch(
    groq`*[_type == "project" && defined(slug.current)] { slug }`,
  );

  const paths = companies.flatMap((company: PortfolioType) => {
    return projects.map((project: ProjectType) => ({
      params: {
        companySlug: company.slug.current,
        project: project.slug.current,
      },
    }));
  });

  console.log("Paths", paths);

  return {
    paths: paths.flatMap((path: object) => [
      { ...path, locale: "en" },
      { ...path, locale: "no" },
    ]),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async (data) => {
  const project = await sanityClient.fetch(projectQuery, {
    projectName: data.params?.project,
  });
  return {
    props: { project, companySlug: data.params?.companySlug },
  };
};

export default ProjectPortfolioPage;
