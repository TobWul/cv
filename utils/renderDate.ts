export const renderDate = (
  startDate: string,
  endDate?: string,
  format?: Intl.DateTimeFormatOptions,
) => {
  const dates = {
    start: new Date(startDate),
    end: endDate && new Date(endDate),
  };

  const toString = (date: Date) =>
    date.toLocaleDateString(
      "no-nb",
      format ?? { month: "short", year: "numeric" },
    );

  if (dates.end) {
    return `${toString(dates.start)} - ${toString(dates.end)}`;
  }
  return toString(dates.start);
};
