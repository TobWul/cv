import { type ReactElement, type ReactNode } from "react";

export interface ProseProps {
  children: ReactNode;
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
}

export function Prose({ children, size = "base" }: ProseProps): ReactElement {
  const blockquote = "text-body2 not-italic";
  return (
    <div
      className={[
        "prose",
        "prose-gray",
        "prose-cv",
        `prose-${size}`,
        ...blockquote
          .split(" ")
          .map((property) => `prose-blockquote:${property}`),
      ].join(" ")}
    >
      {children}
    </div>
  );
}
