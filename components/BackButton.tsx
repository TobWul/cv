import { useI18n } from "@/hooks";
import Link from "next/link";
import { type ReactElement } from "react";

const Arrow = () => (
  <svg
    width="24"
    viewBox="0 0 30 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="group-hover:scale-x-110 origin-right transition-transform stroke-gray-600"
  >
    <path
      d="M3 9.99991C8 9.5 12.445 9.5 17.5 9.5C21.0185 9.5 24.4815 9.5 28 9.5"
      stroke-width="3"
      stroke-linecap="round"
    />
    <path
      d="M11.0854 1.77783C9.55182 3.82259 7.86282 5.79286 5.77184 7.29575C5.18738 7.71582 3.63617 8.39865 2.47935 9.1711C1.37578 9.90799 1.68857 11.2617 2.84082 11.9199C3.42389 12.253 4.01485 12.5319 4.5 12.6936C5.36588 12.9822 6.73422 13.3011 7.5 13.7478C8.29141 14.2095 10.1178 15.7286 11 16"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
);

export function BackButton({
  companySlug,
}: {
  companySlug?: string;
}): ReactElement {
  const { t } = useI18n();
  return (
    <Link
      href={companySlug ? `/${companySlug}` : "/"}
      className="flex gap-8 group"
    >
      <Arrow />
      {t({ en: "Back", no: "Tilbake" })}
    </Link>
  );
}
