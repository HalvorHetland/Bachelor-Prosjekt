import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Gruppe from "./Gruppe";
import React from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Gruppe" element={<Gruppe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
