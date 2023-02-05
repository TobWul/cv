import { Cv } from "components/Cv";
import client from "packages/sanity";
import groq from "groq";
import { GetStaticProps } from "next";
import { CvProps } from "pages";

export default function Home(data: CvProps) {
  return <Cv {...data} />;
}

export async function getStaticPaths() {
  const result = await client.fetch(groq`*[_type == "highlighted"].slug`);

  return {
    paths: result.map((slug) => ({ params: { companyName: slug.current } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (data) => {
  const query = groq`
      {
        "highlighted": *[_type == "highlighted" && slug.current == $companyName] {..., projects[]->{_id}}[0],
        "work": *[_type == "work"] | order(startDate desc) {...},
        "education": *[_type == "education"] | order(startDate desc){...},
        "articles": *[_type == "article"] | order(date desc) {...},
        "projects": *[_type == "project"] | order(startDate desc) {...},
        "references": *[_type == "project"] {...},
        "presentations": *[_type == "presentation"] {...},
      }
      `;

  return {
    props: await client.fetch(query, { companyName: data.params.companyName }),
  };
};
