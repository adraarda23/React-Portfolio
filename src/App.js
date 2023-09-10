import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Paths/Home";
import About from "./components/Paths/About";
import Contact from "./components/Paths/Contact";
import Projects from "./components/Paths/Projects";
import CaseStudy from "./components/Paths/CaseStudy";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
