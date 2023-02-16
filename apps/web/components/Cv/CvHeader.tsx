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
        <LanguageSwitch />
      </Column>
    </Row>
  );
};
