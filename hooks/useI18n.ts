import { CurrentLanguage, LocaleStringType } from "@/types";
import { NextRouter, useRouter } from "next/router";

export const useI18n = () => {
  const { locale, query, push, pathname, asPath }: NextRouter = useRouter();

  const t = (string: LocaleStringType) => {
    if (typeof string !== "object") return string;

    let translated = string[locale as CurrentLanguage];
    if (typeof string[locale as CurrentLanguage] === "undefined") {
      translated = string.no;
      console.warn(`Missing translation for "${string.no}" in "${locale}"`);
    }
    return translated;
  };

  const changeLanguage = (locale: CurrentLanguage) => {
    push({ pathname, query }, asPath, { locale });
  };

  return { locale, t, changeLanguage };
};
