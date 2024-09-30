import { ElementType, forwardRef, useContext } from "react";
import "./ListItemButton.scss";
import { ListItemButtonProps } from "./ListItemButton.d";
import clsx from "clsx";
import ListContext from "../List/ListContext";
import { ButtonBase } from "../ButtonBase";

export const ListItemButton = forwardRef<
  HTMLLIElement,
  ListItemButtonProps<ElementType>
>(function ListItemButton(
  {
    as = "div",
    children,
    className,
    alignItems = "center",
    ...other
  }: ListItemButtonProps<ElementType>,
  ref
) {
  const context = useContext(ListContext);

  // const childContext = useMemo(
  //   () => ({
  //     direction: context.direction || false,
  //     alignItems,
  //   }),
  //   [alignItems, context.direction]
  // );

  console.log((children ? children : "") + ": " + as);

  const classes = clsx(
    "list-item-button hover:bg-gray-100/25 p-2 w-full",
    className,
    context.direction === "horizontal",
    alignItems === "center" ? "flex items-center" : "flex items-start"
  );

  return (
    <ListContext.Provider value={context}>
      <ButtonBase
        ref={ref}
        href={other.href || other.to}
        as={(other.href || other.to) && as === "div" ? "button" : as}
        className={classes}
        {...other}
      >
        {children}
      </ButtonBase>
    </ListContext.Provider>
  );
});

export default ListItemButton;
