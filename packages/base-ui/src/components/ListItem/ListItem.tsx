import { forwardRef } from "react";
import "./ListItem.scss";
import { ListItemProps } from "./ListItem.d";
import clsx from "clsx";

export const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  function ListItem({ children, className }, ref) {
    const classNames = clsx(className, "list-item");

    return (
      <li ref={ref} className={classNames}>
        {children}
      </li>
    );
  }
);

export default ListItem;
