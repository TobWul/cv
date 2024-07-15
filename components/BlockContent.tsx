import * as React from "react";
import { PortableText } from "@portabletext/react";
import { BlockContentType } from "@/types";

interface BlockContentProps {
  blocks: BlockContentType;
}

export const BlockContent: React.FC<BlockContentProps> = ({ blocks }) => {
  return <PortableText value={blocks} />;
};
