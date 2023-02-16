import groq from "groq";

export const queries = {
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
  references: groq`"references": *[_type == "referencePerson"] {...}`,
  presentations: groq`"presentations": *[_type == "presentation"] {...}`,
  skillCategory: groq`"skillCategories": *[_type == "skillCategory"] {...}`,
  languages: groq`"languages": *[_type == "language"] | order(name desc) {...}`,
  volunteerProjects: groq`"volunteerProjects": *[_type == "volunteerProjects"] | order(endDate desc) {...}`,
};
