"use client";
import { CvProps } from "pages";
import {
  LanguageContext,
  LanguageContextProvider,
} from "context/LanguageContex";
import { formatDateRange } from "packages/dateHandling";
import * as React from "react";
import { Column, Row } from "../Container";
import { Item } from "../Item";
import { Education } from "./Education";
import { GenericList } from "./GenericList";
import { Projects } from "./Projects";
import { Work } from "./Work";

const NAME = "Tobias Wulvik";

export const Cv: React.FC<CvProps> = ({
  work,
  education,
  projects,
  references,
  presentations,
  articles,
  ...props
}) => {
  const { selectedLanguage } = React.useContext(LanguageContext);
  const { highlighted } = props;

  return (
    <LanguageContextProvider>
      <main>
        <Row>
          <Column>
            <h1>{NAME}</h1>
          </Column>
        </Row>
        <Row>
          <GenericList
            title="Arbeid"
            list={work}
            titleKey="name"
            descriptionKey="role"
          />
          <GenericList
            title="Utdanning"
            list={education}
            titleKey="name"
            descriptionKey="school"
          />
        </Row>
        <Projects
          projects={projects}
          highlightedProjects={highlighted?.projects}
        />
        <Row>
          <GenericList
            title="Holdte foredrag og kurs"
            list={presentations}
            includeEndDate={false}
            titleKey="name"
          />
          <GenericList
            title="Artikler"
            list={articles}
            titleKey="name"
            includeEndDate={false}
          />
        </Row>
      </main>
    </LanguageContextProvider>
  );
};
