import { ReactElement, FC } from "react";
import { MenuItemProps } from "../MenuItem/MenuItem.d";
import { ListProps } from "../List/List.d";

export interface MenuListProps extends ListProps {
  children: ReactElement<MenuItemProps>[]; // Ensure children are MenuItem components
  className?: string;
}

export const MenuList: FC<MenuListProps>;

export default MenuList;
