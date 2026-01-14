import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Vacantes from "./Vacantes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vacantes" element={<Vacantes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
