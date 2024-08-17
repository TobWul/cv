import { BlockContentType } from "./CV";

export type SlideType = {
  id: string;
  metadata: {
    image: string;
    type?: "image" | "default";
  };
  content: BlockContentType;
  companySlug?: string;
};
