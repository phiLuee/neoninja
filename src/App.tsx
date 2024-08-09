// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Buttons from "./pages/Buttons";
import Navbar from "./components/Navbar/Navbar";
import Offcanvas from "./components/Offcanvas/Offcanvas";
import Button from "./components/Button/Button";

const App: React.FC = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const drawerToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <Router>
      <Offcanvas placement="left" show={showOffcanvas}>
        <p>Menu</p>
      </Offcanvas>
      <Navbar />
      <Button onClick={drawerToggle}>
        <p>Open</p>
      </Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </Router>
  );
};

export default App;
