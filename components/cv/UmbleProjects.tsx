import { type ReactElement } from "react";
import { CvProps } from "./CvContent";
import { renderDate } from "@/utils/renderDate";
import { ProjectType } from "@/types";
import { ProjectLink } from "../ProjectLink";
import { useI18n } from "@/hooks";

export interface UmbleProjectsProps {
  projects: CvProps["projects"];
}

export function UmbleProjects({ projects }: UmbleProjectsProps): ReactElement {
  const { t, locale } = useI18n();
  const ProjectListItem = ({ project }: { project: ProjectType }) => {
    return (
      <tr className="text-secondary font-medium font-sans text-body2 font-mono [&>td]:pt-8 xl:whitespace-nowrap border-b">
        <td className="pr-24 table-cell">
          {project.slug?.current ? (
            <ProjectLink
              className="underline underline-offset-2 underline-gray-200"
              alt={t(project.name)}
              slug={project.slug}
              mainImage={project.mainImage}
            >
              {t(project.name)}
            </ProjectLink>
          ) : (
            t(project.name)
          )}
        </td>
        <td className="text-tertiary pr-24 md:table-cell hidden xl:whitespace-nowrap">
          {t(project.description)}
        </td>
        <td className="text-tertiary w-full gap-4 md:table-cell hidden">
          {renderDate({
            startDate: project.startDate,
            endDate: project.endDate,
            format: "short",
            language: locale,
          })}
        </td>
      </tr>
    );
  };
  return (
    <table className="my-24">
      <tbody>
        {projects
          .filter((project) => project.work.name === "Umble")
          .map((project) => (
            <ProjectListItem key={project._id} project={project} />
          ))}
      </tbody>
    </table>
  );
}
