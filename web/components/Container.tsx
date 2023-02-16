import classNames from "classnames";
import { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
}
interface ColumnProps {
  children: ReactNode;
}

export const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <section className={"border-b border-gray-300 "}>
      <div
        className={classNames("max-w-content mx-auto", {
          // @ts-ignore
          "grid md:grid-cols-2": children?.length === 2,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export const Column: React.FC<ColumnProps> = ({ children }) => {
  return (
    <div className="py-48 space-y-24 md:even:border-l md:even:border-t-0 even:border-t px-content">
      {children}
    </div>
  );
};
