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
import { useI18n } from "@/hooks";

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
  const { t, locale } = useI18n();
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
                subtitle={t(work.role)}
                body={t(work.content)}
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
                category={t({ no: "Arbeidserfaring", en: "Work" })}
                startDate={work.startDate}
                endDate={work.endDate}
                isFirst={i === 0}
                isLast={i === data.work.length - 1}
              />
            );
          })}
          {data.education.map((education, i) => (
            <CvCategory
              title={t(education.name)}
              subtitle={t(education.school)}
              key={education._id}
              category={t({ no: "Utdanning", en: "Education" })}
              startDate={education.startDate}
              endDate={education.endDate}
              isFirst={i === 0}
              isLast={i === data.education.length - 1}
            />
          ))}
          {data.skillCategories.map((skillCategory, i) => (
            <CvCategory
              key={skillCategory._id}
              title={t(skillCategory.name)}
              category={t({ no: "Kompetanser", en: "Skills" })}
              tags={
                // @ts-ignore
                skillCategory[`skills_${locale}`] || skillCategory.skills_no
              }
              isFirst={i === 0}
              isLast={i === data.skillCategories.length - 1}
            />
          ))}
          {data.languages.map((language, i) => (
            <CvCategory
              key={language._id}
              title={t(language.name)}
              body={t(language.level)}
              category={t({ no: "Språk", en: "Language" })}
              isFirst={i === 0}
              isLast={i === data.languages.length - 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
