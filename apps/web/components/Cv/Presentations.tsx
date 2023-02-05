import { Column } from "components/Container";
import { Item } from "components/Item";
import { formatDateRange } from "packages/dateHandling";
import { EducationType } from "packages/types";

interface EducationProps {
  education: EducationType[];
}

export const Presentations: React.FC<EducationProps> = ({ education }) => {
  return (
    <Column>
      <h2>Utdanning</h2>
      {education?.map((item) => (
        <Item title={item.name} key={item._id}>
          <p className="label">
            {formatDateRange(item.startDate, item.endDate)}
          </p>
        </Item>
      ))}
    </Column>
  );
};
