import { ElementType, forwardRef, useContext } from "react";
import "./ListItemButton.scss";
import { ListItemButtonProps } from "./ListItemButton.d";
import clsx from "clsx";
import ListContext from "../List/ListContext";
import { ButtonBase } from "../ButtonBase";
import { ExtendableComponentType } from "../../types/types";

export const ListItemButton = forwardRef<
  HTMLElement,
  ListItemButtonProps<ElementType>
>(function ListItemButton(
  {
    as = "button",
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

  const classes = clsx(
    "list-item-button hover:bg-gray-100/25 w-full p-2",
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
}) as <Tag extends ExtendableComponentType>(
  props: ListItemButtonProps<Tag>
) => JSX.Element;

export default ListItemButton;
