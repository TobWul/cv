import { type ReactElement, type ReactNode } from "react";

export interface ProseProps {
  children: ReactNode;
}

export function Prose({ children }: ProseProps): ReactElement {
  const blockquote = "text-body2 not-italic";
  return (
    <div
      className={[
        "prose",
        "prose-gray",
        "prose-cv",
        ...blockquote
          .split(" ")
          .map((property) => `prose-blockquote:${property}`),
      ].join(" ")}
    >
      {children}
    </div>
  );
}
