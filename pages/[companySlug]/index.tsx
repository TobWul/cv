import CvContent, { CvProps } from "@/components/cv/CvContent";
import { Slide } from "@/components/portfolio";
import { PortfolioType, SanitySlugType } from "@/types";
import { portfolioQuery, queries } from "@/utils/queries";
import { sanityClient } from "@/utils/sanityClient";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
export default function Home({
  portfolio,
  cvData,
  companySlug,
}: {
  companySlug: string;
  portfolio: PortfolioType;
  cvData: CvProps;
}) {
  return (
    <div className="mx-auto">
      <div id="toc">
        <Slide
          id="start"
          content={portfolio.text}
          metadata={{ image: portfolio.illustration || "hello.png" }}
          companySlug={companySlug}
        />
        <CvContent data={cvData} companySlug={companySlug} />
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "portfolio"]{
        slug
      }`,
  );
  return {
    paths: paths.map(({ slug }: { slug: SanitySlugType }) => ({
      params: { companySlug: slug.current },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<{
  cvData: CvProps;
  portfolio: PortfolioType;
}> = async (context) => {
  delete queries.portfolio;

  const portfolio = await sanityClient.fetch(portfolioQuery, {
    companyName: context.params?.companySlug,
  });

  const query = `{${Object.values(queries).join(",")}}`;
  const cvData = await sanityClient.fetch(query);

  return {
    props: { portfolio, cvData, companySlug: context.params?.companySlug },
  };
};
