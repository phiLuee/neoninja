import React, { ReactElement } from "react";
import "./MenuList.scss";
import { MenuItemProps } from "../MenuItem/MenuItem";
import { List } from "base-ui";
import clsx from "clsx";

export interface MenuListProps {
  children: ReactElement<MenuItemProps>[]; // Ensure children are MenuItem components
  className?: string;
}

export const MenuList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const defaultClassName = "menu-list";

  const classes = clsx(defaultClassName, className);
  // React.Children.forEach(children, (child) => {
  //   if (
  //     React.isValidElement(child) &&
  //     child.type !== MenuItem &&
  //     child.type !== Button &&
  //     child.type !== Collapsible
  //   ) {
  //     throw new Error(
  //       "MenuList children should be of type MenuItem or Collapsible"
  //     );
  //   }
  // });

  return <List className={classes}>{children}</List>;
};

export default MenuList;
