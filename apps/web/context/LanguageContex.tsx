import * as React from "react";
import { CurrentLanguage, LocaleStringType } from "../../studio/languages";

type LanguageContextType = {
  selectedLanguage: CurrentLanguage;
  localeToString: (locale: string | LocaleStringType) => string;
};

//@ts-ignore
export const LanguageContext = React.createContext<LanguageContextType>({});

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<CurrentLanguage>("no");

  const localeToString = (locale: string | LocaleStringType) => {
    if (!locale) return "";
    if (typeof locale === "object") {
      return locale[selectedLanguage];
    } else return locale;
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, localeToString }}>
      {children}
    </LanguageContext.Provider>
  );
};
