

import { Routes, Route } from "react-router-dom";

import Blue from "../Components/Blue";
import Red from "../Components/Red";
import Home from "../Components/Home";
import Yellow from "../Components/Yellow";
import Green from "../Components/Green";

export default function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/yellow" element={<Yellow />} />
        <Route path="/green" element={<Green />} />
      </Routes>
    </div>
  );
}
