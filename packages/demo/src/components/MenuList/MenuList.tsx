import React, { ReactElement } from "react";
import "./MenuList.scss";

import MenuItem, { MenuItemProps } from "../MenuItem/MenuItem";
import { Collapsible } from "base-ui";

export interface MenuListProps {
  children: ReactElement<MenuItemProps>[]; // Ensure children are MenuItem components
  className?: string;
}

export const MenuList: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      child.type !== MenuItem &&
      child.type !== Collapsible
    ) {
      throw new Error(
        "MenuList children should be of type MenuItem or Collapsible"
      );
    }
  });

  return <ul className={className}>{children}</ul>;
};

export default MenuList;
