import Link from "next/link";
import { type ReactElement } from "react";
import { CvProps } from "./CvContent";
import { renderDate } from "@/utils/renderDate";
import { ProjectType } from "@/types";
import { ProjectLink } from "../ProjectLink";

export interface UmbleProjectsProps {
  projects: CvProps["projects"];
}

export function UmbleProjects({ projects }: UmbleProjectsProps): ReactElement {
  const ProjectListItem = ({ project }: { project: ProjectType }) => {
    return (
      <tr className="text-secondary font-medium font-sans text-body2 font-mono [&>td]:pt-8 xl:whitespace-nowrap border-b">
        <td className="pr-24 table-cell">
          {project.slug?.current ? (
            <ProjectLink
              className="underline underline-offset-2 underline-gray-200"
              {...project}
            />
          ) : (
            project.name.no
          )}
        </td>
        <td className="text-tertiary pr-24 md:table-cell hidden xl:whitespace-nowrap">
          {project.description.no}
        </td>
        <td className="text-tertiary w-full gap-4 md:table-cell hidden">
          {renderDate(project.startDate, project.endDate, {
            month: "short",
            year: "2-digit",
          })}
        </td>
      </tr>
    );
  };
  return (
    <table className="my-24">
      <tbody>
        {projects
          .filter((project) => !project.name.no.includes("LEGO"))
          .map((project) => (
            <ProjectListItem key={project._id} project={project} />
          ))}
      </tbody>
    </table>
  );
}
