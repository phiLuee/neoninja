import { useCallback, useEffect, useRef, forwardRef } from "react";
import "./Navbar.scss";
import { NavbarProps } from "./Navbar.d";
import { Collapsible } from "../Collapsible";
import { CollapsibleHandle } from "../Collapsible/Collapsible.d";

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ children }, ref) => {
    const submenuRef = useRef<CollapsibleHandle>(null);

    const toggle = useCallback(() => {
      submenuRef.current?.toggle();
    }, []);

    useEffect(() => {
      if (submenuRef.current) {
        toggle();
      }
    }, [toggle]);

    return (
      <nav
        ref={ref}
        className="bar bg-white dark:bg-gray-900 sticky top-0 w-full z-10"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {children}
          <button onClick={toggle} aria-controls="submenu">
            Toggle
          </button>
        </div>

        <Collapsible
          ref={submenuRef}
          className="bar-sub absolute z-10 transition-all duration-300 w-full"
        >
          <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
            <button className="absolute top-4 right-4 " onClick={toggle}>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p>Hi</p>
          </div>
        </Collapsible>
      </nav>
    );
  }
);

export default Navbar;
