import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//verify this should be single ticks
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import Main from "./Layout/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
