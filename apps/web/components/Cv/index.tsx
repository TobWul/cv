"use client";
import { Item } from "components/Item";
import { useI18n } from "packages/i18n";
import { PortfolioType } from "packages/types";
import { CvProps } from "pages";
import * as React from "react";
import { Column, Row } from "../Container";
import { CvHeader } from "./CvHeader";
import { GenericList } from "./GenericList";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export const Cv: React.FC<CvProps> = ({
  work,
  education,
  projects,
  references,
  presentations,
  languages,
  skillCategories,
  articles,
  ...props
}) => {
  const { portfolio } = props as unknown as { portfolio: PortfolioType };
  const { t } = useI18n();

  return (
    <main>
      <CvHeader />
      <Row>
        <GenericList
          title={{ no: "Arbeid", en: "Work" }}
          list={work}
          titleKey="name"
          descriptionKey="role"
        />
        <GenericList
          title={{ no: "Utdanning", en: "Education" }}
          list={education}
          titleKey="name"
          descriptionKey="school"
        />
      </Row>
      <Projects
        title={{ no: "Prosjekter", en: "Projects" }}
        projects={projects}
        highlightedProjects={portfolio?.projects}
        text={portfolio?.text}
      />
      <Row>
        <Column>
          <h2>{t({ en: "Skills", no: "Kompetanser" })}</h2>
          <Skills skillCategories={skillCategories} />
        </Column>
        <Column>
          <h2>{t({ no: "Språk", en: "Languages" })}</h2>
          {languages.map((language) => (
            <Item title={language.name} key={language._id}>
              <p className="text-label">{t(language.level)}</p>
            </Item>
          ))}
          <h2>{t({ no: "Praktisk", en: "Practical" })}</h2>
          <Item title={t({ no: "Førerkort til bil", en: "Driver's license" })}>
            <p className="text-label">
              {t({ no: "Norsk B førerkort", en: "Norwegian B license" })}
            </p>
          </Item>
        </Column>
      </Row>
      <Row>
        <GenericList
          title={{
            no: "Holdte foredrag og kurs",
            en: "Presentations and courses",
          }}
          list={presentations}
          includeEndDate={false}
          titleKey="name"
        />
        <GenericList
          title={{ no: "Aritkler", en: "Articles" }}
          list={articles}
          titleKey="name"
          includeEndDate={false}
        />
      </Row>
      <Row>
        <Column>
          <h2>{t({ no: "Referanser", en: "References" })}</h2>
          {!portfolio?.showReferences && (
            <p className="text-label italic">
              Kontaktinfo sendes ved forespørsel
            </p>
          )}
          {references.map((reference) => (
            <Item title={reference.name} key={reference._id}>
              <p className="text-label max-w-lg">{t(reference.description)}</p>
              {portfolio?.showReferences && (
                <div className="mt-8 flex gap-8 items-center text-gray-600">
                  <p className="text-label">{reference.phone}</p>
                  <div className="w-1 h-16 bg-gray-400" />
                  <p className="text-label">{reference.email}</p>
                </div>
              )}
            </Item>
          ))}
          <div className="pb-128" />
        </Column>
      </Row>
    </main>
  );
};
