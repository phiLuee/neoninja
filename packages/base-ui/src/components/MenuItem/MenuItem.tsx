import { forwardRef, Ref, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";
import { MenuItemProps } from "./MenuItem.d";
import { Collapsible } from "../Collapsible/Collapsible";
import { ListItem } from "../ListItem";
import clsx from "clsx";

export const MenuItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLLIElement,
  MenuItemProps
>(function MenuItem({ to = "#", label = "", className, children }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const classNames = clsx(className, "menu-item");
  return (
    <ListItem className={classNames}>
      {!children ? (
        <NavLink to={to} ref={ref as Ref<HTMLAnchorElement>}>
          {label}
        </NavLink>
      ) : (
        <>
          <button
            ref={ref as Ref<HTMLButtonElement>}
            onClick={() => setIsOpen(!isOpen)}
          >
            {label}
          </button>
          <Collapsible inProp={isOpen}>{children}</Collapsible>
        </>
      )}
    </ListItem>
  );
});

export default MenuItem;
