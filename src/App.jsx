import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
    </div>
  );
}
