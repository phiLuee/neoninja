import React from "react";
import { ListItemProps } from "../ListItem/ListItem";

export interface ListProps {
  children: React.ReactElement<ListItemProps>[]; // Ensure children are ListItem components
  className?: string;
  direction?: "horizontal" | "vertical";
  ref?: React.Ref<HTMLUListElement>;
}

export const List: React.FC<ListProps>;

export default List;
