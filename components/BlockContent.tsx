import * as React from "react";
import { PortableText } from "@portabletext/react";
import { BlockContentType, ProjectType } from "@/types";
import Link from "next/link";
import { ProjectLink } from "./ProjectLink";

interface BlockContentProps {
  blocks: BlockContentType;
  companySlug?: string;
}

export const BlockContent: React.FC<BlockContentProps> = ({
  blocks,
  companySlug,
}) => {
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
          companySlug={companySlug}
        >
          {children}
        </ProjectLink>
      ),
    },
  };

  return <PortableText value={blocks} components={customComponents} />;
};
