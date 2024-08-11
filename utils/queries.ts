import groq from "groq";

const mainImage = `mainImage {
      ...,
      "asset": asset->{
        ...,
        metadata {
          ...,
          lqip
        }
      },
}
`;

const internalLinkReference = `{
  ...,
  markDefs[]{
    ...,
    _type == "internalLink" => {
      "project": @.reference->{
        slug,
        ${mainImage},
      }
    }
  }
}
`;

export const portfolioQuery = groq`*[_type == "portfolio" && slug.current == $companyName] {
  companyName,
  slug,
  text {
    no[]${internalLinkReference},
    en[]${internalLinkReference},
  },
  projects[]-> {
    _id,
    title, // Add other fields you want from the project
    description
  },
  showReferences
}[0]`;

export const queries: { [key: string]: string } = {
  work: groq`"work": *[_type == "work"] | order(startDate desc) {...}`,
  education: groq`"education": *[_type == "education"] | order(startDate desc){...}`,
  articles: groq`"articles": *[_type == "article"] | order(date desc) {...}`,
  projects: groq`"projects": *[_type == "project"] | order(startDate desc) {
    ..., 
    work->{...},
    ${mainImage},
  }`,
  references: groq`"references": *[_type == "referencePerson"] | order(sorting) {...}`,
  presentations: groq`"presentations": *[_type == "presentation"] | order(date desc) {...}`,
  skillCategory: groq`"skillCategories": *[_type == "skillCategory"] | order(sorting) {...}`,
  languages: groq`"languages": *[_type == "language"] | order(sorting) {...}`,
  volunteerProjects: groq`"volunteerProjects": *[_type == "volunteerProjects"] | order(endDate desc) {...}`,
};
