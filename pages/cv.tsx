import { GetStaticProps } from "next/types";

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
} from "@/types";
import { sanityClient } from "@/utils/sanityClient";
import { queries } from "@/utils/queries";

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

export default function CV(data: CvProps) {
  console.log(data);

  return (
    <div>
      <ul>
        {data.work.map((work) => (
          <li key={work._id}>{work.name}</li>
        ))}
      </ul>

      <ul>
        {data.education.map((education) => (
          <li key={education._id}>{education.name.no}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<CvProps> = async () => {
  delete queries.portfolio;
  const query = `{${Object.values(queries).join(",")}}`;
  return {
    props: await sanityClient.fetch(query),
  };
};
