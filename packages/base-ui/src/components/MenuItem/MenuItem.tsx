import { forwardRef, useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";
import { MenuItemProps } from "./MenuItem.d";
import { Collapsible } from "../Collapsible/Collapsible";
import { ListItem } from "../ListItem";
import clsx from "clsx";
import { CollapsibleHandle } from "../Collapsible/Collapsible.d";

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(
    {
      to = "#",
      label = "",
      className,
      children,
      subFixed = false,
      ...listItemProps
    },
    ref
  ) {
    const classNamesLiItem = clsx(className, "menu-item relative");
    const classNamesActionItem = clsx("py-5 pt-0");
    const collapsibleRef = useRef<CollapsibleHandle>(null);

    const toggleCollapsible = useCallback(() => {
      collapsibleRef.current?.toggle();
    }, []);

    return (
      <ListItem ref={ref} className={classNamesLiItem} {...listItemProps}>
        {!children ? (
          <NavLink className={classNamesActionItem} to={to}>
            {label}
          </NavLink>
        ) : (
          <>
            <button
              className={classNamesActionItem}
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
  }
);

export default MenuItem;
