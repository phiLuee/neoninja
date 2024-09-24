import React from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps, ListType, RefListType } from "./List.d";

export const List = React.forwardRef<
  RefListType<ListType>,
  ListProps<ListType>
>(function List<T extends ListType = "ul">(
  {
    as: Component = "ul" as T,
    className,
    children,
    direction = "vertical",
    wrap = true,
    ...rest
  }: ListProps<T>,
  ref: React.ForwardedRef<RefListType<T>>
): React.ReactElement {
  // Memoize den Kontextwert, um unnötige Re-Renders zu vermeiden
  const context = React.useMemo(() => ({ direction }), [direction]);

  // Berechne die Klassennamen basierend auf der Richtung
  const classes = clsx("list flex", className, {
    "flex-row items-center": direction === "horizontal",
    "flex-col": direction === "vertical",
    "flex-wrap": wrap,
  });

  const ComponentType = Component as React.ElementType;

  return (
    <ListContext.Provider value={context}>
      <ComponentType ref={ref} className={classes} {...rest}>
        {children}
      </ComponentType>
    </ListContext.Provider>
  );
});

export default List;
