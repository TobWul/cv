import { LocaleStringType } from "../../../studio/languages";

export type { CurrentLanguage } from "../../../studio/languages";

type BlockContentType = any;

export type SanityImageType = any;

export type EducationType = {
  _id?: string;
  name: string;
  school: LocaleStringType;
  startDate: string;
  endDate: string;
};
export type ArticleType = {
  _id?: string;
  name: LocaleStringType;
  description: LocaleStringType;
  date: string;
};
export type PresentationType = {
  _id?: string;
  name: LocaleStringType;
  description: LocaleStringType;
  content: BlockContentType;
  startDate: string;
};
export type ProjectType = {
  _id?: string;
  name: LocaleStringType;
  description: LocaleStringType;
  mainImage: SanityImageType;
  content: BlockContentType;
  startDate: string;
  endDate: string;
};

export type ReferencePersonType = {
  _id?: string;
  name: string;
  description: LocaleStringType;
  phone: string;
  email: string;
};

export type WorkType = {
  _id?: string;
  name: string;
  role: string;
  description: LocaleStringType;
  startDate: string;
  endDate: string;
};
