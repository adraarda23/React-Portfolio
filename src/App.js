import React from "react";
import { Routes, Route,Router} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AnimatedRoutes/>
      <Footer />
    </div>
  );
}

export default App;
