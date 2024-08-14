// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Navbar } from "base-ui";
import Components from "./pages/Components";
import Buttons from "./pages/Buttons";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <Navbar>as</Navbar>
      </ThemeProvider>
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
