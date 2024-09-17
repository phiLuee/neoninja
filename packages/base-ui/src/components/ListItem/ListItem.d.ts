import React from "react";

export interface ListItemProps {
  className?: string; // Optional className prop for styling
  children?: React.ReactNode; // Optional children prop for submenu
}

export const ListItem: React.FC<
  ListItemProps & React.RefAttributes<HTMLLIElement>
>;

export default ListItem;
