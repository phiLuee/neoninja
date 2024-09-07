import React, { forwardRef } from "react";
import "./MenuList.scss";
import { List } from "../List";
import clsx from "clsx";

export interface MenuListProps {
  children: React.ReactNode;
  className?: string;
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>(
  ({ children, className }, ref) => {
    const defaultClassName = "menu-list";
    const classNames = clsx(defaultClassName, className);

    return (
      <List ref={ref} className={classNames}>
        {children}
      </List>
    );
  }
);

export default MenuList;
