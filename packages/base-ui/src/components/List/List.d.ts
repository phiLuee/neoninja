import React from "react";

export interface ListProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  direction?: "horizontal" | "vertical";
}

export const List: React.FC<ListProps>;

export default List;
