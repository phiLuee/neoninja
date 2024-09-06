import { forwardRef, Ref, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";
import { MenuItemProps } from "./MenuItem.d";
import { Collapsible } from "../Collapsible/Collapsible";

export const MenuItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | HTMLLIElement,
  MenuItemProps
>(function MenuItem({ to = "#", label = "", children }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="menu-item mx-2">
      {!children ? (
        <NavLink to={to} ref={ref as Ref<HTMLAnchorElement>}>
          {label}
        </NavLink>
      ) : (
        <>
          <button
            ref={ref as Ref<HTMLButtonElement>}
            onClick={() => setIsOpen(!isOpen)}
          >
            {label}
          </button>
          <Collapsible inProp={isOpen}>{children}</Collapsible>
        </>
      )}
    </li>
  );
});

export default MenuItem;
