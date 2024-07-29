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
import { ProjectLink } from "../ProjectLink";
import { LegoProjects } from "./LegoProjects";

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
      <table className="max-w-page mx-auto border-separate border-spacing-64 w-full py-64 margin-x-auto">
        <tbody>
          {data.work.map((work, i) => {
            console.log(data.projects);

            const workProjects = data.projects.filter(
              (project) => project.work?._id === work._id,
            );
            return (
              <CvCategory
                title={work.name}
                subtitle={work.role.no}
                body={work.content?.no}
                logo={
                  {
                    "the lego group": "/lego.svg",
                    umble: "/umble.png",
                  }[work.name.toLowerCase()]
                }
                extra={
                  {
                    "the lego group": <LegoProjects projects={workProjects} />,
                    umble: <UmbleProjects projects={workProjects} />,
                  }[work.name.toLowerCase()]
                }
                key={work._id}
                category="Arbeidserfaring"
                startDate={work.startDate}
                endDate={work.endDate}
                isFirst={i === 0}
                isLast={i === data.work.length - 1}
              />
            );
          })}
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
              title={skillCategory.name.no}
              category="Kompetanser"
              tags={skillCategory.skills_no}
              isFirst={i === 0}
              isLast={i === data.skillCategories.length - 1}
            />
          ))}
          {data.languages.map((language, i) => (
            <CvCategory
              key={language._id}
              title={language.name.no}
              body={language.level.no}
              category="Språk"
              isFirst={i === 0}
              isLast={i === data.languages.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
