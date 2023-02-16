import groq from "groq";
import { GetStaticProps } from "next/types";
import { useI18n } from "packages/i18n";
import client from "packages/sanity";
import { queries } from "packages/sanity/queries";
import { PortfolioType, SanitySlugType } from "packages/types";
import * as React from "react";

interface PortfolioPageProps extends PortfolioType {}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  companyName,
  text,
  projects,
}) => {
  const { t } = useI18n();
  return (
    <div>
      <h2>{companyName}</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h3>{t(project.name)}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
  const query = `{${queries.portfolio}}`;

  return {
    props: (
      await client.fetch(query, { companyName: data.params?.companyName })
    ).portfolio,
  };
};

export default PortfolioPage;
