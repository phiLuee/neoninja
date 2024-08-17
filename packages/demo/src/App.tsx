// src/App.tsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar, Button, Offcanvas, useTheme } from "base-ui";
import Components from "./pages/Components";
import Buttons from "./pages/Buttons";

const App: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const drawerToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Router>
      <Navbar>
        <a href="/" className="flex items-center ">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NeoNinja
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white active:text-blue-700"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components"
                className="block py-2 px-3 text-gray-900 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white"
              >
                Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900  md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  dark:hover:text-white"
              >
                About
              </NavLink>
            </li>
            <li>
              <Button size="small" onClick={drawerToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
              <Button onClick={toggleTheme}>{theme}</Button>
            </li>
          </ul>
        </div>
      </Navbar>

      <Offcanvas show={showOffcanvas} placement="left">
        <p>Menu</p>
      </Offcanvas>

      <div className="max-w-screen-xl p-5 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/buttons" element={<Buttons />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
