import { CurrentLanguage } from "packages/types";

export const formatDate = (date: string, language?: CurrentLanguage) => {
  if (!date) return;
  const locale =
    (language && { no: "no-nb", en: "en-gb" }[language]) || "no-nb";

  return new Date(date).toLocaleDateString(locale, {
    month: "short",
    year: "numeric",
  });
};

export const formatDateRange = (startDate: string, endDate: string) => {
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  if (!end) return `${start} - Avsluttende`;
  return `${start} - ${end}`;
};
