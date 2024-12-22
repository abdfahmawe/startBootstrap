import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contactme/Contact";
import End from "./components/home/end/End";
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <End />
    </div>
  );
}
