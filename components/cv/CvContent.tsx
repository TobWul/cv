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

export default function CvContent({
  companySlug,
  data,
}: {
  companySlug?: string;
  data: CvProps;
}) {
  const { t, locale } = useI18n();
  const getPosition = (
    index: number,
    arr: object[],
  ): { isLast: boolean; isFirst: boolean } => ({
    isFirst: index === 0,
    isLast: index === arr.length - 1,
  });
  return (
    <div className="bg-gray-100 border-y border-gray-200" id="cv">
      <table className="max-w-page mx-auto border-separate border-spacing-64 w-full py-64 margin-x-auto">
        <tbody>
          {data.work.map((work, i) => {
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
                    "the lego group": (
                      <LegoProjects
                        projects={workProjects}
                        companySlug={companySlug}
                      />
                    ),
                    umble: (
                      <UmbleProjects
                        projects={workProjects}
                        companySlug={companySlug}
                      />
                    ),
                  }[work.name.toLowerCase()]
                }
                key={work._id}
                category={t({ no: "Arbeidserfaring", en: "Work" })}
                startDate={work.startDate}
                endDate={work.endDate}
                {...getPosition(i, data.work)}
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
              {...getPosition(i, data.education)}
            />
          ))}
          {data.skillCategories.map((skillCategory, i) => (
            <CvCategory
              key={skillCategory._id}
              title={t(skillCategory.name)}
              category={t({ no: "Kompetanser", en: "Skills" })}
              body={t(skillCategory.description)}
              tags={
                // @ts-ignore
                skillCategory[`skills_${locale}`] || skillCategory.skills_no
              }
              {...getPosition(i, data.skillCategories)}
            />
          ))}
          {data.languages.map((language, i) => (
            <CvCategory
              key={language._id}
              title={t(language.name)}
              body={t(language.level)}
              category={t({ no: "Språk", en: "Language" })}
              {...getPosition(i, data.languages)}
            />
          ))}
          {data.articles.map((article, i) => (
            <CvCategory
              key={article._id}
              category={t({ no: "Artikler", en: "Articles" })}
              title={t(article.name)}
              body={t(article.description)}
              {...getPosition(i, data.articles)}
            />
          ))}

          {data.volunteerProjects.map((volunteerProject, i) => (
            <CvCategory
              key={volunteerProject._id}
              category={t({ no: "Verv", en: "Volunteer work" })}
              title={t(volunteerProject.name)}
              body={t(volunteerProject.description)}
              {...getPosition(i, data.volunteerProjects)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
