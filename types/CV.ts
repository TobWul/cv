export type LocaleStringType = {
  no: string;
  en: string;
};

export type CurrentLanguage = keyof LocaleStringType;

export type BlockContentType = any;

export type SanityImageType = any;

export type SanitySlugType = { current: string };

export type EducationType = {
  _id?: string;
  name: LocaleStringType;
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
  slug: SanitySlugType;
  introduction: LocaleStringType;
  description: LocaleStringType;
  mainImage: SanityImageType;
  work: WorkType;
  content: BlockContentType;
  startDate: string;
  endDate: string;
  slides: PortfolioSlideType[];
};

export type PortfolioSlideType = {
  _id?: string;
  image: SanityImageType;
  title: LocaleStringType;
  text: LocaleStringType;
  position: "left" | "right";
};

export type LanguageType = {
  _id?: string;
  name: LocaleStringType;
  level: LocaleStringType;
};

export type SkillCategoryType = {
  _id?: string;
  name: LocaleStringType;
  skills_no: string[];
  skills_en: string[];
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
  role: LocaleStringType;
  description: LocaleStringType;
  content: BlockContentType;
  startDate: string;
  endDate: string;
};

export type PortfolioType = {
  companyName: string;
  slug: SanitySlugType;
  projects: ProjectType[];
  text: BlockContentType;
  showReferences: boolean;
};

export type VolunteerProjectType = {
  name: LocaleStringType;
  description: LocaleStringType;
  startDate: string;
  endDate: string;
};
