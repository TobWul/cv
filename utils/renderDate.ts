import { useI18n } from "@/hooks";
import { CurrentLanguage } from "@/types";
import { Interval } from "luxon";

function getRelativeTimeDifference(start: Date, end: Date): string {
  const interval = Interval.fromDateTimes(start, end);
  const diffInYears = Math.floor(interval.length("years"));
  const diffInMonths = Math.round(interval.length("months") - diffInYears * 12);
  const diffInWeeks = Math.round(interval.length("weeks"));

  let formattedMonth = (() => {
    if (diffInMonths === 0) {
      return "";
    }
    if (diffInMonths === 1) {
      return `1 måned`;
    }
    return `${diffInMonths} måneder`;
  })();

  let formattedYear = (() => {
    if (diffInYears === 0) {
      return "";
    }
    return `${diffInYears} år`;
  })();

  const divider = diffInYears && diffInMonths ? " og " : "";

  if (diffInMonths <= 2 && diffInYears === 0) {
    return `${diffInWeeks} uker`;
  }

  return formattedYear + divider + formattedMonth;
}

export const renderDate = ({
  startDate,
  endDate,
  format = "long",
  language,
}: {
  startDate: string;
  endDate?: string;
  format?: "short" | "long" | "relative";
  language?: string;
}) => {
  const locale = { no: "no-nb", en: "en-gb" }[language || "no"] || "no-nb";
  const dates = {
    start: new Date(startDate),
    end: endDate && new Date(endDate),
  };

  const relative = getRelativeTimeDifference(
    dates.start,
    dates.end || new Date(),
  );

  const toString = (date: Date) =>
    date.toLocaleDateString(
      locale,
      format === "short"
        ? { month: "short", year: "2-digit" }
        : { month: "short", year: "numeric" },
    );

  let renderedDateString = toString(dates.start);

  if (dates.end) {
    renderedDateString += " - " + toString(dates.end);
  }

  if (format === "relative") {
    renderedDateString += ", " + relative;
  }

  return renderedDateString;
};
