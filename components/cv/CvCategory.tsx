import { BlockContentType } from "@/types";
import { renderDate } from "@/utils/renderDate";
import { type ReactElement } from "react";
import { BlockContent } from "../BlockContent";

export type BaseCvCategoryProps = {
  category: string;
  subtitle?: string;
  body?: BlockContentType;
  extra?: ReactElement;
  tags?: string[];
  startDate?: string;
  endDate?: string;
  isFirst: boolean;
  isLast?: boolean;
};

export type CvCategoryProps = (
  | { title: string; tags?: never }
  | { title?: never; tags: string[] }
) &
  BaseCvCategoryProps;

export function CvCategory({
  category,
  title,
  subtitle,
  body,
  tags,
  extra,
  startDate,
  isFirst,
  isLast,
  endDate,
}: CvCategoryProps): ReactElement {
  return (
    <>
      {isFirst && (
        <tr className="md:hidden">
          <td className="font-sans">{category}</td>
        </tr>
      )}
      <tr className="padding-b-64">
        <td className="md:block hidden align-top text-subtitle1 text-secondary ">
          {isFirst && category}
        </td>
        <td className="align-top" style={{ paddingBottom: isLast ? 64 : 0 }}>
          <div className="flex flex-col gap-8">
            <div className="md:flex gap-16">
              {title && <p className="text-subtitle1 font-medium">{title}</p>}
              {subtitle && (
                <p className="text-subtitle1 text-secondary">{subtitle}</p>
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
            {body && (
              <div className="prose prose-sm prose-cv">
                <BlockContent blocks={body} />
              </div>
            )}
            {extra}
            <p className="text-body1 font-sans text-secondary capitalize">
              {startDate && renderDate(startDate, endDate)}
            </p>
          </div>
        </td>
      </tr>
    </>
  );
}
