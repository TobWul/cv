import { Column } from "components/Container";
import { Item } from "components/Item";
import { LanguageContext, LanguageContextType } from "context/LanguageContex";
import { formatDate, formatDateRange } from "packages/dateHandling";
import {
  ArticleType,
  EducationType,
  PresentationType,
  WorkType,
} from "packages/types";
import { useContext } from "react";

interface EducationProps {
  list: EducationType[] | WorkType[] | PresentationType[] | ArticleType[];
  title: string;
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
  const { localeToString } = useContext(LanguageContext);

  return (
    <Column>
      <h2>{title}</h2>
      {list?.map((item, index) => {
        return (
          //@ts-ignore
          <Item title={localeToString(item[titleKey])} key={item._id}>
            <p className="text-label">{localeToString(item[descriptionKey])}</p>
            <p className="text-label">
              {includeEndDate
                ? //@ts-ignore
                  formatDateRange(item.startDate, item.endDate)
                : //@ts-ignore
                  formatDate(item.date)}
            </p>
          </Item>
        );
      })}
    </Column>
  );
};
