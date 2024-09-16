import { forwardRef, useContext } from "react";
import "./ListItem.scss";
import { ListItemProps } from "./ListItem.d";
import clsx from "clsx";
import ListContext from "../List/ListContext";

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem({ children, className }, ref) {
    const { direction } = useContext(ListContext);
    const classNames = clsx(className, "list-item", direction);

    return (
      <li ref={ref} className={classNames}>
        {children}
      </li>
    );
  }
);

export default ListItem;
