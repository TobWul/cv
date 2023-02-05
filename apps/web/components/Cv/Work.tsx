import { formatDateRange } from "packages/dateHandling";
import { WorkType } from "packages/types";
import { Column } from "../Container";
import { Item } from "../Item";

interface WorkProps {
  work: WorkType[];
}

export const Work: React.FC<WorkProps> = ({ work }) => {
  return (
    <Column>
      <h2>Arbeid</h2>
      {work?.map((item) => (
        <Item title={item.name} key={item._id}>
          <p className="label">
            {formatDateRange(item.startDate, item.endDate)}
          </p>
        </Item>
      ))}
    </Column>
  );
};
