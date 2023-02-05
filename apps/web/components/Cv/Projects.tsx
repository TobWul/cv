import { MonthIndicator } from "components/Project/MonthIndicator";
import { ProjectItem } from "components/Project/ProjectItem";
import { LanguageContext } from "context/LanguageContex";
import { ProjectType } from "packages/types";
import { useContext } from "react";

interface ProjectsProps {
  projects: ProjectType[];
  highlightedProjects: ProjectType[];
}

const daysBetween = (startDate: string, endDate: string) => {
  let difference = Math.abs(
    new Date(startDate).getTime() - new Date(endDate).getTime()
  );
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};

function dateRange(startDate: string, endDate: string) {
  var start = startDate.split("-");
  var end = endDate.split("-");
  var startYear = parseInt(start[0]);
  var endYear = parseInt(end[0]);

  var dates = [];

  for (var i = startYear; i <= endYear; i++) {
    var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
    var startMon = i === startYear ? parseInt(start[1]) - 1 : 0;
    for (var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j + 1) {
      var month = j + 1;
      var displayMonth = month < 10 ? "0" + month : month;
      dates.push([i, displayMonth, "01"].join("-"));
    }
  }

  return dates.reverse();
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  highlightedProjects,
}) => {
  const { localeToString } = useContext(LanguageContext);

  const fromDate = projects[0].endDate;
  const dayToPxRatio = 2;

  const calculateLeftOffset = (endDate: string) => {
    const days = daysBetween(endDate, fromDate);

    return days * dayToPxRatio;
  };

  const calculateWidth = (startDate: string, endDate: string) => {
    const days = daysBetween(startDate, endDate);
    return days * dayToPxRatio;
  };
  return (
    <div className=" border-b max-w-screen overflow-x-auto">
      <div className="max-w-content mx-auto py-48 px-content">
        <h2>Prosjekter</h2>
        <p>
          Hei Lego! Relevante prosjekter er markert i{" "}
          <span className="text-accent">rødt</span>
        </p>
      </div>
      <div className="relative max-w-content mx-auto px-content">
        <div className="h-full">
          {dateRange(
            projects[projects.length - 1].startDate,
            projects[0].endDate
          ).map((date) => (
            <MonthIndicator
              left={calculateLeftOffset(date)}
              date={date}
              key={date}
            />
          ))}
        </div>
        <div className="py-32">
          {projects.map((project, index) => {
            const leftOffset = calculateLeftOffset(project.endDate);
            const width = calculateWidth(project.startDate, project.endDate);
            return (
              <div
                key={project._id}
                style={{ zIndex: projects.length - index }}
                className="relative"
              >
                <ProjectItem
                  name={localeToString(project.name)}
                  description={localeToString(project.description)}
                  mainImage={project.mainImage}
                  left={leftOffset}
                  width={width}
                  index={index}
                  hasContent={Boolean(project.content)}
                  highlighted={highlightedProjects?.some(
                    (highlightedProject) =>
                      highlightedProject._id === project._id
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
