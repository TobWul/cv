import classNames from "classnames";
import { useI18n } from "@/hooks";
import * as React from "react";
import { CurrentLanguage } from "@/types";

interface LanguageSwitchProps {}

const Squiggle = () => (
  <svg
    width="52"
    height="5"
    viewBox="0 0 52 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-gray-600 absolute left-1/2 -translate-x-1/2 bottom-0"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M51.6898 2.15533C51.8523 2.96767 51.3255 3.75791 50.5131 3.92038C48.2762 4.36776 45.8913 4.43004 43.5923 4.37978C42.4391 4.35457 41.2873 4.30027 40.1774 4.24794C39.0603 4.19527 37.988 4.14472 36.9605 4.12391C29.5196 3.97321 22.108 4.03786 14.6726 4.10272C10.5829 4.1384 6.48598 4.17414 2.37305 4.17414C1.54462 4.17414 0.873047 3.50256 0.873047 2.67414C0.873047 1.84571 1.54462 1.17414 2.37305 1.17414C6.42914 1.17414 10.5003 1.13872 14.5794 1.10323C22.0475 1.03826 29.5424 0.973058 37.0212 1.12453C38.0896 1.14617 39.1961 1.19834 40.2981 1.2503L40.3187 1.25127C41.4346 1.30388 42.5487 1.35625 43.6579 1.3805C45.8839 1.42916 48.0105 1.3615 49.9248 0.978637C50.7371 0.816169 51.5274 1.34299 51.6898 2.15533Z"
    />
  </svg>
);

export const LanguageSwitch: React.FC<LanguageSwitchProps> = ({}) => {
  const { changeLanguage, locale } = useI18n();
  const Button = ({
    children,
    language,
  }: {
    children: React.ReactNode;
    language: CurrentLanguage;
  }) => {
    return (
      <button
        className={classNames(
          language === locale ? "text-gray-900 font-bold" : "text-gray-500",
          "font-sans relative",
        )}
        onClick={() => changeLanguage(language)}
      >
        {children}
        {language === locale && <Squiggle />}
      </button>
    );
  };
  return (
    <div className="inline-flex items-center rounded overflow-hidden gap-16">
      <Button language="no">Norsk</Button>
      <Button language="en">English</Button>
    </div>
  );
};
