import { ReactNode } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface ItemProps {
  title: string;
  children: ReactNode;
  index?: number;
}

export const Item: React.FC<ItemProps> = ({ title, children }) => {
  return (
    <AnimateOnScroll animation="fade">
      <h3>{title}</h3>
      {children}
    </AnimateOnScroll>
  );
};
