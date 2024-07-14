import groq from "groq";

export const queries: { [key: string]: string } = {
  portfolio: groq`"portfolio": *[_type == "portfolio" && slug.current == $companyName] {..., projects[]->{...}}[0]`,
  work: groq`"work": *[_type == "work"] | order(startDate desc) {...}`,
  education: groq`"education": *[_type == "education"] | order(startDate desc){...}`,
  articles: groq`"articles": *[_type == "article"] | order(date desc) {...}`,
  projects: groq`"projects": *[_type == "project"] | order(startDate desc) {
    ..., 
    mainImage {
      ...,
      "asset": asset->{
        ...,
        metadata {
          ...,
          lqip
        }
      },
    }
    }`,
  references: groq`"references": *[_type == "referencePerson"] | order(sorting) {...}`,
  presentations: groq`"presentations": *[_type == "presentation"] | order(date desc) {...}`,
  skillCategory: groq`"skillCategories": *[_type == "skillCategory"] | order(sorting) {...}`,
  languages: groq`"languages": *[_type == "language"] | order(sorting) {...}`,
  volunteerProjects: groq`"volunteerProjects": *[_type == "volunteerProjects"] | order(endDate desc) {...}`,
};
