import React from 'react'
import {Route,Routes,useLocation} from "react-router-dom"
import Home from "./components/Paths/Home";
import About from "./components/Paths/About";
import Contact from "./components/Paths/Contact";
import Projects from "./components/Paths/Projects";
import CaseStudy from "./components/Paths/CaseStudy";
import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
    const location =useLocation();
  return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/case-study/:projectId" element={<CaseStudy />} />
        </Routes>
        </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes