import classNames from "classnames";
import { useI18n } from "packages/i18n";
import * as React from "react";
import { CurrentLanguage } from "../../studio/languages";

interface LanguageSwitchProps {}

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({}) => {
  const { changeLanguage, locale } = useI18n();
  const Button = ({ language }: { language: CurrentLanguage }) => {
    // Return a button with the language as text and a click handler that changes the language and is text-gray-900 if the language is the current language
    return (
      <button
        className={classNames(
          language === locale ? "text-gray-900" : "text-gray-500",
          "uppercase"
        )}
        onClick={() => changeLanguage(language)}
      >
        {language}
      </button>
    );
  };
  return (
    <div className="flex gap-8">
      <Button language="no" />
      <span>/</span>
      <Button language="en" />
    </div>
  );
};
