import { forwardRef, useContext } from "react";
import "./ListItem.scss";
import { ListItemProps } from "./ListItem.d";
import clsx from "clsx";
import ListContext from "../List/ListContext";

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem({ children, className }, ref) {
    const { direction } = useContext(ListContext);
    const classes = clsx(
      "list-item",
      className,
      direction === "horizontal" && "mr-4"
    );

    return (
      <li ref={ref} className={classes}>
        {children}
      </li>
    );
  }
);

export default ListItem;
