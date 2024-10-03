// src/App.tsx
import React, { useCallback, useMemo, useRef, useState } from "react";
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
} from "base-ui";
import Components from "./pages/Components";
import Buttons from "./pages/Buttons";
import Appbar from "./pages/Appbar";
import Modals from "./pages/Modal";
import Menu from "./parts/Menu";
import Lists from "./pages/Lists";

const App: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navbarRef = useRef<NavbarHandle>(null);

  const subnavContentA = useMemo(
    () => (
      <>
        <MenuList className="menu-list flex flex-row items-center">
          <MenuItem
            to="/components/buttons"
            label="Button"
            className="mx-2"
          ></MenuItem>
          <MenuItem
            to="/components/lists"
            label="Lists"
            className="mx-2"
          ></MenuItem>
          <MenuItem
            to="/components/navbar"
            label="Navbar"
            className="mx-2"
          ></MenuItem>
          <MenuItem
            to="/components/modals"
            label="Modals"
            className="mx-2"
          ></MenuItem>
        </MenuList>
      </>
    ),
    []
  );

  const subnavContentB = useMemo(
    () => (
      <>
        <div>Components B</div>
      </>
    ),
    []
  );

  const componentsMenu = useCallback(() => {
    if (navbarRef.current) {
      if (navbarRef.current.isSubnavOpen) navbarRef.current.toggle();
      navbarRef.current.setSubnavContent(subnavContentA);
      navbarRef.current.toggle();
    }
  }, [subnavContentA]);

  const otherMenu = useCallback(() => {
    if (navbarRef.current) {
      if (navbarRef.current.isSubnavOpen) navbarRef.current.toggle();
      navbarRef.current.setSubnavContent(subnavContentB);
      navbarRef.current.toggle();
    }
  }, [subnavContentB]);

  const drawerToggle = useCallback(() => {
    setShowOffcanvas(!showOffcanvas);
  }, [showOffcanvas]);

  return (
    <>
      <Navbar ref={navbarRef}>
        <a href="/" className="flex items-center">
          <span className="text-black dark:text-white">NeoNinja</span>
        </a>

        <div className="flex flex-row justify-end w-full md:w-auto">
          <MenuList className="menu-list" direction="horizontal">
            <MenuItem to="/" label="Home" className="mx-2"></MenuItem>
            <button onClick={componentsMenu}>Components</button>
            <span> &nbsp;</span>
            <button onClick={otherMenu}>Other</button>
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
              <Button size="xsmall" target="_blank" className="inline-flex" href="https://github.com/phiLuee/neoninja">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="size-4" 
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
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

      <div className="max-w-screen-xl mx-auto">
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/buttons" element={<Buttons />} />
          <Route path="/components/navbar" element={<Appbar />} />
          <Route path="/components/modals" element={<Modals />} />
          <Route path="/components/lists" element={<Lists />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
