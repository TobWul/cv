import { useI18n } from "packages/i18n";
import { SkillCategoryType } from "packages/types";
import * as React from "react";
import { LocaleStringType } from "../../../studio/languages";

interface SkillsProps {
  skillCategories: SkillCategoryType[];
}

export const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  const [categories, setCategories] = React.useState<
    { name: LocaleStringType; skills: string[] }[]
  >([]);
  const { t, locale } = useI18n();
  React.useEffect(() => {
    setCategories(
      skillCategories.map((skillCategory) => ({
        ...skillCategory,
        skills:
          ((skillCategory as any)[`skills_${locale}`] as string[]) ||
          ((skillCategory as any)[`skills_no`] as string[]),
      }))
    );
  }, [skillCategories, locale]);

  return (
    <table className="border-separate border-spacing-y-24">
      {categories.map((category) => {
        return (
          // @ts-ignore
          <tr key={category._id}>
            <td className="text-label align-text-top pr-24">
              {t(category.name)}:
            </td>
            <td className="flex flex-wrap gap-8">
              {category.skills?.map((skill: string) => {
                return (
                  <span
                    key={skill}
                    className="whitespace-nowrap bg-gray-100 text-label p-4"
                  >
                    {skill}
                  </span>
                );
              })}
            </td>
          </tr>
        );
      })}
    </table>
  );
};
