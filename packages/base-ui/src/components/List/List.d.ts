import React from "react";
import { ListItemProps } from "../ListItem/ListItem";

export interface ListProps {
  children: ReactElement<ListItemProps>[]; // Ensure children are ListItem components
  className?: string;
  direction?: "horizontal" | "vertical";
  ref?: Ref<HTMLUListElement>;
}

export const List: React.FC<ListProps>;

export default List;
