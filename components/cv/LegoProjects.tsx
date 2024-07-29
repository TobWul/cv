import { ProjectType } from "@/types";
import { type ReactElement } from "react";
import { ProjectLink } from "../ProjectLink";

export interface LegoProjectsProps {
  projects: ProjectType[];
}

export function LegoProjects({ projects }: LegoProjectsProps): ReactElement {
  return (
    <>
      {projects
        .sort((_a, b) => {
          if (b.name.no.toLowerCase().includes("plugin")) return -1;
          if (b.name.no.toLowerCase().includes("what")) return 1;
          return 0;
        })
        .map((project) => (
          <ProjectLink
            mainImage={project.mainImage}
            slug={project.slug}
            alt={project.name.no}
            key={project._id}
            className="no-underline max-w-prose"
          >
            <div className="px-24 py-16 border border-gray-400 flex flex-col rounded bg-gray-50">
              <p className="text-subtitle2 font-medium mb-4">
                {project.name.no}
              </p>
              <p className="text-body1 leading-normal">
                {project.description.no}
              </p>
            </div>
          </ProjectLink>
        ))}
    </>
  );
}
