import { ReactElement, FC } from "react";
import { MenuItemProps } from "../MenuItem/MenuItem.d";

export interface MenuListProps {
  children: ReactElement<MenuItemProps>[]; // Ensure children are MenuItem components
  className?: string;
}

export const MenuList: FC<MenuListProps>;

export default MenuList;
