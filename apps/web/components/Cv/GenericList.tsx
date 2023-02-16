import { Column } from "components/Container";
import { Item } from "components/Item";
import { formatDate, formatDateRange } from "packages/dateHandling";
import { useI18n } from "packages/i18n";
import {
  ArticleType,
  EducationType,
  PresentationType,
  ReferencePersonType,
  WorkType,
} from "packages/types";
import { useContext } from "react";
import { LocaleStringType } from "../../../studio/languages";

interface EducationProps {
  title: LocaleStringType;
  list:
    | EducationType[]
    | WorkType[]
    | PresentationType[]
    | ArticleType[]
    | ReferencePersonType[];
  descriptionKey?: "description" | "role" | "school";
  includeEndDate?: boolean;
  titleKey: "name" | "title";
}

export const GenericList: React.FC<EducationProps> = ({
  title,
  titleKey,
  descriptionKey = "description",
  includeEndDate = true,
  list,
}) => {
  const { t, locale } = useI18n();

  return (
    <Column>
      <h2>{t(title)}</h2>
      {list?.map((item, index) => {
        return (
          //@ts-ignore
          <Item title={t(item[titleKey])} key={item._id}>
            <p className="text-label">{t(item[descriptionKey])}</p>
            <p className="text-label">
              {includeEndDate
                ? //@ts-ignore
                  formatDateRange(item.startDate, item.endDate, locale)
                : //@ts-ignore
                  formatDate(item.date, locale)}
            </p>
          </Item>
        );
      })}
    </Column>
  );
};
