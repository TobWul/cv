import * as React from "react";
import { PortableText } from "@portabletext/react";
import { BlockContentType, ProjectType } from "@/types";
import Link from "next/link";
import { ProjectLink } from "./ProjectLink";

interface BlockContentProps {
  blocks: BlockContentType;
}

export const BlockContent: React.FC<BlockContentProps> = ({ blocks }) => {
  const customComponents = {
    marks: {
      internalLink: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value?: { project: ProjectType };
      }) => (
        <ProjectLink
          mainImage={value?.project.mainImage}
          slug={value ? value.project.slug : { current: "undefined" }}
          alt="Bilde av relevant prosjekt"
        >
          {children}
        </ProjectLink>
      ),
    },
  };

  return <PortableText value={blocks} components={customComponents} />;
};
