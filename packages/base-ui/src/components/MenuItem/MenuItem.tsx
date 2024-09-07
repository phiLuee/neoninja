import { forwardRef, Ref, useCallback, useRef } from "react";
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
>(function MenuItem(
  { to = "#", label = "", className, children, subFixed = false },
  ref
) {
  const classNames = clsx(className, "menu-item relative");
  const collapsibleRef = useRef<CollapsibleHandle>(null);

  const toggleCollapsible = useCallback(() => {
    collapsibleRef.current?.toggle();
  }, []);

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
            onClick={toggleCollapsible}
          >
            {label}
          </button>
          <Collapsible
            ref={collapsibleRef}
            className={clsx(
              subFixed ? "fixed z-20 w-auto bg-white dark:bg-gray-900" : ""
            )}
          >
            {children}
          </Collapsible>
        </>
      )}
    </ListItem>
  );
});

export default MenuItem;
