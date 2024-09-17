import React from "react";
import { ListItemProps } from "../ListItem/ListItem";

export interface MenuItemProps extends ListItemProps {
  label?: string;
  to?: string;
  className?: string; // Optional className prop for styling
  children?: React.ReactNode; // Optional children prop for submenu
  subFixed?: boolean;
  ref?: React.Ref<HTMLLIElement>; // Ref for the menu item
}

export const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
