// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Buttons from './pages/Buttons';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buttons" element={<Buttons />} />
      </Routes>
    </Router>
  );
};

export default App;