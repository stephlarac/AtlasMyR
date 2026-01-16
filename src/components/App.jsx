import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vacantes from "./Vacantes";
import ScrollToAnchor from './ScrollToAnchor';

function App() {
  return (
    <HashRouter>
      <ScrollToAnchor/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vacantes" element={<Vacantes />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
