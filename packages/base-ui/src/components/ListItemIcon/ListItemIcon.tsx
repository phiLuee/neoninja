import { forwardRef, useContext } from "react";
import "./ListItemIcon.scss";
import { ListItemIconProps } from "./ListItemIcon.d";
import clsx from "clsx";
import ListContext from "../List/ListContext";
import spriteImage from "./../../assets/css_sprites.png";

export const ListItemIcon = forwardRef<HTMLImageElement, ListItemIconProps>(
  function ListItemIcon(
    {
      className,
      alignItems = "center",
      role = "Icon",
      iconSize = "icon-medium",
      ...other
    }: ListItemIconProps,
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
      "list-item-icon icon",
      iconSize,
      className,
      context.direction === "horizontal",
      alignItems === "center" ? "flex items-center" : "flex items-start"
    );

    return (
      <ListContext.Provider value={context}>
        <img
          ref={ref}
          className={classes}
          src={spriteImage}
          role={role}
          {...other}
        ></img>
      </ListContext.Provider>
    );
  }
);

export default ListItemIcon;
