import { useI18n } from "@/hooks";
import { ProjectType } from "@/types";
import { LanguageSwitch } from "../LanguageSwitch";
import { ProjectSlide } from "./ProjectSlide";
import { renderDate } from "@/utils/renderDate";
import Link from "next/link";
import { BackButton } from "../BackButton";

export interface ProjectPageProps {
  project: ProjectType;
  companySlug?: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({
  project: { name, introduction, slides, startDate, endDate },
  companySlug,
}) => {
  const { t, locale } = useI18n();
  return (
    <main className="">
      <header className="max-w-screen-lg min-h-[40vh] mx-auto flex items-center p-24 pt-0">
        <div>
          <div className="mb-64 text-body2">
            <div className="flex justify-between gap-8 text-gray-600">
              <BackButton companySlug={companySlug} />
              <LanguageSwitch />
            </div>
          </div>
          <h1 className="my-16">{t(name)}</h1>
          <p>{t(introduction)}</p>
          <p className="text-label mt-16 font-sans text-secondary">
            {renderDate({ startDate, endDate, language: locale })}
          </p>
        </div>
      </header>

      <div className="space-y-24 p-24 pt-64 bg-gray-900" id="toc">
        {slides.map((slide) => (
          <ProjectSlide {...slide} key={slide._id} />
        ))}
      </div>
    </main>
  );
};
