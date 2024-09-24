import { forwardRef, useCallback, useContext, useMemo, useRef } from "react";
import "./MenuItem.scss";
import { MenuItemProps } from "./MenuItem.d";
import { Collapsible } from "../Collapsible/Collapsible";
import { ListItem } from "../ListItem";
import clsx from "clsx";
import { ButtonBase } from "../ButtonBase";
import { CollapsibleHandle } from "../Collapsible/Collapsible.d";
import ListContext from "../List/ListContext";

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
    const classNamesLiItem = clsx("menu-item relative", className);
    const classNamesActionItem = clsx("");
    const collapsibleRef = useRef<CollapsibleHandle>(null);

    const toggleCollapsible = useCallback(() => {
      collapsibleRef.current?.toggle();
    }, []);

    const context = useContext(ListContext);
    const childContext = useMemo(
      () => ({
        ...context,
      }),
      [context]
    );

    return (
      <ListContext.Provider value={childContext}>
        <ListItem ref={ref} className={classNamesLiItem} {...listItemProps}>
          {!children ? (
            <ButtonBase className={classNamesActionItem} to={to}>
              {label}
            </ButtonBase>
          ) : (
            <>
              <ButtonBase
                className={classNamesActionItem}
                onClick={toggleCollapsible}
              >
                {label}
              </ButtonBase>
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
      </ListContext.Provider>
    );
  }
);

export default MenuItem;
