import groq from "groq";

export const queries = {
  highlighted: groq`*[_type == "highlighted" && slug.current == $companyName] {...}[0]`,
  work: groq`*[_type == "work"] | order(startDate desc) {...}`,
  education: groq`*[_type == "education"] | order(startDate desc){...}`,
  articles: groq`*[_type == "article"] | order(date desc) {...}`,
  projects: groq`*[_type == "project"] | order(startDate desc) {...}`,
  references: groq`*[_type == "project"] {...}`,
  presentations: groq`*[_type == "presentation"] {...}`,
};

export const cvQuery = (additionalQuires?: string) => groq`
{
  ${additionalQuires ? additionalQuires + ",\n" : ""}
  articles: ${queries.articles},
  education: ${queries.education},
  presentations: ${queries.presentations},
  projects: ${queries.projects},
  references: ${queries.references},
  work: ${queries.work}
}
`;
