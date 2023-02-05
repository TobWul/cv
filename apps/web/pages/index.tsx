import { Habibi, Space_Grotesk } from "@next/font/google";
import { Cv } from "components/Cv";
import client, { sanityFetchStaticProps } from "packages/sanity";
import groq from "groq";
import {
  WorkType,
  EducationType,
  ArticleType,
  ProjectType,
  ReferencePersonType,
  PresentationType,
} from "packages/types";
import { GetStaticProps } from "next";

export type CvProps = {
  work: WorkType[];
  education: EducationType[];
  articles: ArticleType[];
  projects: ProjectType[];
  references: ReferencePersonType[];
  presentations: PresentationType[];
};

export default function Home(data: CvProps) {
  return <Cv {...data} />;
}

export const getStaticProps: GetStaticProps<CvProps> = async () => {
  const query = groq`
  {
    "work": *[_type == "work"] | order(startDate desc) {...},
    "education": *[_type == "education"] | order(startDate desc){...},
    "articles": *[_type == "article"] | order(date desc) {...},
    "projects": *[_type == "project"] | order(startDate desc) {...},
    "references": *[_type == "project"] {...},
    "presentations": *[_type == "presentation"] {...},
  }`;
  return {
    props: await client.fetch(query),
  };
};
