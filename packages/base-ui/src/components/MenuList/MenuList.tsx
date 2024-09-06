import React from "react";
import "./MenuList.scss";
import { List } from "../List";
import clsx from "clsx";

export const MenuList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const defaultClassName = "menu-list";
  const classNames = clsx(defaultClassName, className);

  return <List className={classNames}>{children}</List>;
};

export default MenuList;
