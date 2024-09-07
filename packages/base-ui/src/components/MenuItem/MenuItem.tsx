import { forwardRef, Ref, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";
import { MenuItemProps } from "./MenuItem.d";
import { Collapsible } from "../Collapsible/Collapsible";
import { ListItem } from "../ListItem";
import clsx from "clsx";
import { CollapsibleHandle } from "../Collapsible/Collapsible.d";

export const MenuItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLLIElement,
  MenuItemProps
>(function MenuItem({ to = "#", label = "", className, children }, ref) {
  const classNames = clsx(className, "menu-item");
  const collapsibleRef = useRef<CollapsibleHandle>(null);

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
            onClick={() => collapsibleRef.current?.toggle()}
          >
            {label}
          </button>
          <Collapsible ref={collapsibleRef}>{children}</Collapsible>
        </>
      )}
    </ListItem>
  );
});

export default MenuItem;
