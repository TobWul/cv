import { CurrentLanguage } from "packages/types";

export const formatDate = (date: string, language: CurrentLanguage) => {
  if (!date) return;
  const locale = { no: "no-nb", en: "en-gb" }[language] || "no-nb";

  return new Date(date).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
};

export const formatDateRange = (
  startDate: string,
  endDate: string,
  language: CurrentLanguage
) => {
  const start = formatDate(startDate, language);
  const end = formatDate(endDate, language);

  if (!end) return `${start} - `;
  return `${start} - ${end}`;
};
