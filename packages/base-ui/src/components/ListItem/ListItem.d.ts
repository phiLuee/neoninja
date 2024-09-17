import React from "react";

export interface ListItemProps {
  className?: string; // Optional className prop for styling
  children?: React.ReactNode; // Optional children prop for submenu
  ref?: Ref<HTMLLIElement>; // Ref for the list item
}

export const ListItem: React.FC<ListItemProps>;

export default ListItem;
