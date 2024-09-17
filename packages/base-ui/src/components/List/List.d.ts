import React, { RefAttributes } from "react";

export interface ListProps<T extends ElementType = "ul"> {
  as?: T;
  children: React.ReactNode;
  className?: string;
  wrap?: boolean;
  direction?: "horizontal" | "vertical";
}

export const List: <T extends "ul" | "ol">(
  props: ListProps<T> & RefAttributes<HTMLElement>
) => React.ReactElement | null;

export default List;
