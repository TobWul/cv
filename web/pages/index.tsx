import { Cv } from "components/Cv";
import client from "packages/sanity";
import {
  WorkType,
  EducationType,
  ArticleType,
  ProjectType,
  ReferencePersonType,
  PresentationType,
  LanguageType,
  SkillCategoryType,
  VolunteerProjectType,
} from "packages/types";
import { GetStaticProps } from "next";
import { queries } from "packages/sanity/queries";

export type CvProps = {
  work: WorkType[];
  education: EducationType[];
  articles: ArticleType[];
  projects: ProjectType[];
  references: ReferencePersonType[];
  languages: LanguageType[];
  skillCategories: SkillCategoryType[];
  presentations: PresentationType[];
  highlightedProjects?: Pick<ProjectType, "_id">[];
  volunteerProjects: VolunteerProjectType[];
};

export default function Home(data: CvProps) {
  return <Cv {...data} />;
}

export const getStaticProps: GetStaticProps<CvProps> = async () => {
  // @ts-ignore
  delete queries.portfolio;
  const query = `{${Object.values(queries).join(",")}}`;
  return {
    props: await client.fetch(query),
  };
};
