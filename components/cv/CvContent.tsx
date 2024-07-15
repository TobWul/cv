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
import { CvCategory } from "@/components/cv";
import { UmbleProjects } from "./UmbleProjects";
import { BlockContent } from "../BlockContent";
import Link from "next/link";
import { ProjectLink } from "../ProjectLink";

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

export default function CvContent({ data }: { data: CvProps }) {
  return (
    <div className="bg-gray-100 border-y border-gray-200" id="cv">
      <table className="max-w-page mx-auto border-separate border-spacing-48 w-full py-64 margin-x-auto">
        <tbody>
          {data.work.map((work, i) => (
            <CvCategory
              title={work.name}
              subtitle={work.role.no}
              body={work.content?.no}
              extra={
                {
                  "the lego group": (
                    <span>
                      <ProjectLink
                        className="text-secondary text-body2"
                        {...data.projects[0]}
                      />
                    </span>
                  ),
                  umble: <UmbleProjects projects={data.projects} />,
                }[work.name.toLowerCase()]
              }
              key={work._id}
              category="Arbeidserfaring"
              startDate={work.startDate}
              endDate={work.endDate}
              isFirst={i === 0}
              isLast={i === data.work.length - 1}
            />
          ))}
          {data.education.map((education, i) => (
            <CvCategory
              title={education.name.no}
              subtitle={education.school.no}
              key={education._id}
              category="Utdanning"
              startDate={education.startDate}
              endDate={education.endDate}
              isFirst={i === 0}
              isLast={i === data.education.length - 1}
            />
          ))}
          {data.skillCategories.map((skillCategory, i) => (
            <CvCategory
              key={skillCategory._id}
              category={skillCategory.name.no}
              tags={skillCategory.skills_no}
              isFirst
              isLast
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
