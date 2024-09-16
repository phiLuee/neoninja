import {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import "./Navbar.scss";
import { NavbarHandle, NavbarProps } from "./Navbar.d";
import { Collapsible } from "../Collapsible";
import { CollapsibleHandle } from "../Collapsible/Collapsible.d";
import clsx from "clsx";

export const Navbar = forwardRef<NavbarHandle, NavbarProps>(
  ({ children, as: Component = "nav", className }, ref) => {
    const contentRef = useRef<HTMLElement>(null);
    const submenuRef = useRef<CollapsibleHandle>(null);
    const [subnavContent, setSubnavContent] = useState<React.ReactNode>(null);

    const toggleMenu = useCallback(() => {
      submenuRef.current?.toggle();
    }, []);

    useImperativeHandle(ref, () => ({
      element: contentRef.current as HTMLElement,
      setSubnavContent,
      isSubnavOpen: submenuRef.current?.isOpen ?? false,
      toggle: () => submenuRef.current?.toggle(),
    }));

    const classNames = clsx(
      "bar bg-white dark:bg-gray-900 sticky top-0 w-full z-10",
      className
    );

    return (
      <Component ref={contentRef} className={classNames}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {children}
        </div>

        <Collapsible
          ref={submenuRef}
          className="bar-sub transition-all absolute duration-300 w-full"
        >
          <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
            <button className="absolute top-4 right-4 " onClick={toggleMenu}>
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
            {subnavContent}
          </div>
        </Collapsible>
      </Component>
    );
  }
);

export default Navbar;
