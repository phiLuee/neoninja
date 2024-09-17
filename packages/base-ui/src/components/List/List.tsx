import React, { forwardRef, useMemo } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";

export const List: React.FC<ListProps> = forwardRef<
  HTMLUListElement,
  ListProps
>(({ className, children, direction = "vertical" }, ref) => {
  const context = useMemo(() => ({ direction }), [direction]);

  const defaultClassName = "list";

  const classesHorizontal = "flex flex-row items-center";

  const classes = useMemo(
    () =>
      clsx(
        defaultClassName,
        className,
        direction === "horizontal" ? classesHorizontal : ""
      ),
    [defaultClassName, className, direction, classesHorizontal]
  );

  return (
    <ListContext.Provider value={context}>
      <ul ref={ref} className={classes}>
        {children}
      </ul>
    </ListContext.Provider>
  );
});

export default List;
