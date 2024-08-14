import React from "react";
import "./Navbar.scss";
import { NavbarProps } from "./Navbar.d";

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className="bar bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
