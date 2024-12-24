import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contactme/Contact";
import End from "./components/home/end/End";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <End />
    </>
  );
}
