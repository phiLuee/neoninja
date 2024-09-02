import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { NavbarProps } from "./Navbar.d";

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submenuRef.current) {
      if (show) {
        submenuRef.current.style.height = `${submenuRef.current.scrollHeight}px`;
      } else {
        submenuRef.current.style.height = "0px";
      }
    }
  }, [show]);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <nav className="bar bg-white dark:bg-gray-900 sticky top-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          onClick={handleToggle}
          aria-expanded={show}
          aria-controls="submenu"
        >
          Toggle
        </button>
        {children}
      </div>
      <div
        ref={submenuRef}
        className="bar-sub z-10 transition-all duration-300 overflow-hidden h-0 absolute w-full"
      >
        <div className="max-w-screen-xl relative flex flex-wrap items-center justify-between mx-auto p-4">
          <button className="absolute top-4 right-4 " onClick={handleToggle}>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p>Hi</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
