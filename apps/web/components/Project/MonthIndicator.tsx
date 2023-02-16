import classNames from "classnames";
import { useI18n } from "packages/i18n";

interface MonthIndicatorProps {
  date: string;
  left: number;
}

export const MonthIndicator: React.FC<MonthIndicatorProps> = ({
  date,
  left,
}) => {
  const { locale } = useI18n();
  const isJanuary = date.split("-")[1] === "01";
  const monthName = new Date(date).toLocaleDateString(
    // @ts-ignore
    { no: "no-nb", en: "en-gb" }[locale],
    { month: "short", ...(isJanuary && { year: "2-digit" }) }
  );

  return (
    <div
      className={classNames(
        "pl-4 absolute h-full w-48 after:h-full after:absolute after:left-0 after:top-0 select-none",
        {
          "after:w-2 after:bg-gray-100": isJanuary,
          "after:w-1 after:bg-gray-100": !isJanuary,
        }
      )}
      style={{ left }}
    >
      <span className="text-gray-500 text-label whitespace-nowrap absolute right-full pr-4">
        {monthName}
      </span>
    </div>
  );
};
