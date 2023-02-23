import { Image } from "components/Image";
import Link from "next/link";
import { GetStaticProps } from "next/types";
import { useI18n } from "packages/i18n";
import client from "packages/sanity";
import { queries } from "packages/sanity/queries";
import { PortfolioType } from "packages/types";
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
      <header className="max-w-content mx-auto py-128 px-24 ">
        <h1>{t({ en: "Portfolio", no: "Portefølje" })}</h1>
        <p>{t(text)}</p>
      </header>
      <ul>
        {projects.map((project) => (
          <li key={project._id} className="border-b first:border-t">
            <Link
              className="grid md:grid-cols-[3fr_2fr] py-32 max-w-content items-center mx-auto px-24 group"
              href={`/portfolio/${project.slug.current}`}
            >
              <Image
                image={project.mainImage}
                alt={project.name.en}
                className="md:order-2 md:m-0 mb-24"
              />
              <div>
                <h3 className="group-hover:underline">{t(project.name)}</h3>
                <p>{t(project.description)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (data) => {
  const query = `{${queries.portfolio}}`;

  return {
    props: (await client.fetch(query, { companyName: "default" })).portfolio,
  };
};

export default PortfolioPage;
