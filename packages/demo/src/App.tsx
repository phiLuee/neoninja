// src/App.tsx
import React, { useCallback, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  Navbar,
  Button,
  Offcanvas,
  useTheme,
  MenuList,
  MenuItem,
  NavbarHandle,
  Modal,
} from "base-ui";
import Components from "./pages/Components";
import Buttons from "./pages/Buttons";
import Menu from "./parts/Menu";

const App: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navbarRef = useRef<NavbarHandle>(null);

  const componentsMenu = useCallback(() => {
    navbarRef.current?.toggle();
  }, []);

  const drawerToggle = useCallback(() => {
    setShowOffcanvas(!showOffcanvas);
  }, [showOffcanvas]);

  return (
    <>
      <Navbar ref={navbarRef}>
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="m-1"
            alt="Logo"
          />
          <span className="text-black dark:text-white">NeoNinja</span>
        </a>

        <div className="flex flex-row justify-end w-full md:w-auto">
          <MenuList className="menu-list flex flex-row items-center">
            <MenuItem to="/" label="Home" className="mx-2"></MenuItem>
            <button onClick={componentsMenu}>
              Components
              {/* <MenuList>
                <MenuItem label="Buttons" to="/components/buttons" />
                <MenuItem label="Buttons" to="/components/buttons" />
                <MenuItem label="Buttons" to="/components/buttons" />
              </MenuList> */}
            </button>
            <MenuItem to="/about" label="About" className="mx-2"></MenuItem>
          </MenuList>
          <ul className="flex flex-row items-center">
            <li className="px-2">
              <Button size="xsmall" onClick={toggleTheme}>
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                )}
              </Button>
            </li>
            <li className="px-2">
              <Button size="xsmall" onClick={drawerToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Button>
            </li>
          </ul>
        </div>
      </Navbar>

      <Offcanvas show={showOffcanvas} placement="left">
        <Menu></Menu>
      </Offcanvas>

      <Modal></Modal>

      <div className="max-w-screen-xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/buttons" element={<Buttons />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
