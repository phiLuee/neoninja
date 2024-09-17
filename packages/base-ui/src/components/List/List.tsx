import { forwardRef, useMemo } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, children, direction = "vertical" }, ref) => {
    // Memoize the context value to avoid unnecessary re-renders
    const context = useMemo(() => ({ direction }), [direction]);

    // Compute the class names based on the direction
    const classes = clsx(
      "list",
      className,
      direction === "horizontal" && "flex flex-row items-center"
    );

    return (
      <ListContext.Provider value={context}>
        <ul ref={ref} className={classes}>
          {children}
        </ul>
      </ListContext.Provider>
    );
  }
);

export default List;
