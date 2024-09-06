import { forwardRef } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";
import React from "react";

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, children, as: Component = "ul" }, ref) => {
    const defaultClassName = "list";

    const classes = clsx(defaultClassName, className);
    const dense = false;
    const context = React.useMemo(() => ({ dense }), [dense]);

    return (
      <ListContext.Provider value={context}>
        <Component ref={ref} className={classes}>
          {children}
        </Component>
      </ListContext.Provider>
    );
  }
);

export default List;
