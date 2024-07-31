import { BlockContentType } from "@/types";
import { renderDate } from "@/utils/renderDate";
import { type ReactElement } from "react";
import { BlockContent } from "../BlockContent";
import Image from "next/image";
import { useI18n } from "@/hooks";

export type CvCategoryProps = {
  category: string;
  title: string;
  subtitle?: string;
  logo?: string;
  body?: BlockContentType;
  extra?: ReactElement;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  isFirst: boolean;
  isLast?: boolean;
};

export function CvCategory({
  category,
  title,
  logo,
  subtitle,
  body,
  tags,
  extra,
  startDate,
  isFirst,
  isLast,
  endDate,
}: CvCategoryProps): ReactElement {
  const { locale } = useI18n();
  return (
    <>
      {isFirst && (
        <tr className="md:hidden">
          <td className="font-sans">{category}</td>
        </tr>
      )}
      <tr>
        <td className="md:block hidden align-top text-heading4 text-secondary">
          {isFirst && category}
        </td>
        <td className="align-top" style={{ paddingBottom: isLast ? 64 : 0 }}>
          <div className="flex flex-col gap-8">
            <div className="md:flex gap-16 mb-8">
              {title && (
                <>
                  {logo && (
                    <Image
                      src={logo}
                      width={32}
                      height={32}
                      alt={title}
                      className="object-contain"
                    />
                  )}
                  <p className="text-heading4 font-medium">{title}</p>
                </>
              )}
              {subtitle && (
                <p className="text-heading4 text-secondary">{subtitle}</p>
              )}
            </div>
            {tags && (
              <div className="flex flex-wrap gap-8 max-w-512">
                {tags.map((tag) => (
                  <span
                    className="bg-gray-200 py-2 px-4 rounded-sm font-sans text-body2"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {typeof body === "string" ? (
              <div className="text-secondary">{body}</div>
            ) : (
              <div className="prose prose prose-cv">
                <BlockContent blocks={body} />
              </div>
            )}
            {extra}
            <p className="text-body1 font-sans text-secondary">
              {startDate &&
                renderDate({
                  startDate,
                  endDate,
                  format: "relative",
                  language: locale,
                })}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
