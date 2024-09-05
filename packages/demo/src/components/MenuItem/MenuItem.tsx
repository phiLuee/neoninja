import { forwardRef, Ref, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";
import React from "react";
import { Collapsible } from "base-ui";

export interface MenuItemProps {
  label?: string;
  to?: string;
  children?: React.ReactNode; // Optional children prop for submenu
}

export const MenuItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  MenuItemProps
>(function MenuItem({ to = "#", label = "", children }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="menu-item mx-2">
      {!children && (
        <NavLink
          ref={ref as Ref<HTMLAnchorElement>}
          to={to}
          className="block py-2 px-3 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white active:text-blue-700"
        >
          {label}
        </NavLink>
      )}

      {children && (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>{label}</button>
          <Collapsible inProp={isOpen}>{children}</Collapsible>
        </>
      )}
    </li>
  );
});

export default MenuItem;
