import { Column, Row } from "components/Container";
import { LanguageSwitch } from "components/LanguageSwitch";
import { useI18n } from "packages/i18n";
import * as React from "react";

interface CvHeaderProps {}

const NAME = "Tobias Wulvik";

export const CvHeader: React.FC<CvHeaderProps> = ({}) => {
  return (
    <Row>
      <Column>
        <h1>{NAME}</h1>
        <div className="text-label">
          <p>+47 472 44 448</p>
          <p>tobias.wulvik@gmail.com</p>
        </div>
        <LanguageSwitch />
      </Column>
    </Row>
  );
};
