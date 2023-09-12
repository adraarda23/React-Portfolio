import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import "./App.css"
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
