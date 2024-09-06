import { ReactElement } from "react";
import { MenuItemProps } from "../MenuItem/MenuItem.d";

export interface MenuListProps {
  children: ReactElement<MenuItemProps>[]; // Ensure children are MenuItem components
  className?: string;
}

export const MenuList: React.FC<MenuListProps>;

export default MenuList;
