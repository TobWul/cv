import { Cv } from "components/Cv";
import client from "packages/sanity";
import groq from "groq";
import { GetStaticProps } from "next";
import { CvProps } from "pages";
import { queries } from "packages/sanity/queries";
import { SanitySlugType } from "packages/types";

export default function Home(data: CvProps) {
  return <Cv {...data} />;
}

export async function getStaticPaths() {
  const result = await client.fetch(groq`*[_type == "portfolio"].slug`);

  return {
    paths: [
      ...result.map((slug: SanitySlugType) => ({
        params: { companyName: slug.current },
        locale: "en",
      })),
      ...result.map((slug: SanitySlugType) => ({
        params: { companyName: slug.current },
        locale: "no",
      })),
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (data) => {
  const query = `{${Object.values(queries).join(",")}}`;

  return {
    props: await client.fetch(query, { companyName: data.params?.companyName }),
  };
};
