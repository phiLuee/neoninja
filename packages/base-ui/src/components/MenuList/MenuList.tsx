import { forwardRef } from "react";
import "./MenuList.scss";
import { List } from "../List";
import clsx from "clsx";
import { MenuListProps } from "./MenuList.d";

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(
  ({ children, className, ...listProps }, ref) => {
    const defaultClassName = "menu-list";
    const classNames = clsx(defaultClassName, className, listProps.className);

    return (
      <List ref={ref} className={classNames} {...listProps}>
        {children}
      </List>
    );
  }
);

export default MenuList;
