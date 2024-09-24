import { FC } from "react";
import { ListProps } from "../List/List.d";

export interface MenuListProps extends Omit<ListProps<"ul">, "ref"> {
  children: React.ReactNode;
}

export const MenuList: FC<MenuListProps>;

export default MenuList;
