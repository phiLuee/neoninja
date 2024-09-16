import { forwardRef } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";
import React from "react";

export const List = forwardRef<HTMLUListElement, ListProps>(
  (
    { className, children, as: Component = "ul", direction = "vertical" },
    ref
  ) => {
    const context = React.useMemo(() => ({ direction }), [direction]);

    const defaultClassName = "list";

    const classesHorizontal = "flex flex-row items-center";

    const classes = clsx(
      defaultClassName,
      className,
      context.direction === "horizontal" ? classesHorizontal : ""
    );

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
