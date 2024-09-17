import { ElementType, forwardRef, ReactElement, useMemo, Ref } from "react";
import clsx from "clsx";
import "./List.scss";
import ListContext from "./ListContext";
import { ListProps } from "./List.d";

export const List = forwardRef(function List<T extends ElementType = "ul">(
  {
    as,
    className,
    children,
    direction = "vertical",
    wrap = true,
    ...rest
  }: ListProps<ElementType> & React.RefAttributes<ElementType>,
  ref: Ref<T>
): ReactElement | null {
  // Memoize the context value to avoid unnecessary re-renders
  const context = useMemo(() => ({ direction }), [direction]);

  const defaultClassName = "list flex ";

  // Compute the class names based on the direction
  const classes = clsx(defaultClassName, className, {
    "flex-row items-center": direction === "horizontal",
    "flex-col": direction === "vertical", // Add vertical specific classes
    "flex-wrap": wrap,
  });

  const Component = as || "ul";

  return (
    <ListContext.Provider value={context}>
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    </ListContext.Provider>
  );
});

export default List;
