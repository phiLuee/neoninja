import { forwardRef } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";

export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, children, as: Component = "ul" }, ref) => {
    const defaultClassName = "list";

    const classes = clsx(defaultClassName, className);

    return (
      <ListContext.Provider value={{}}>
        <Component ref={ref} className={classes}>
          {children}
        </Component>
      </ListContext.Provider>
    );
  }
);

export default List;
