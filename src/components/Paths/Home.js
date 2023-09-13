import React from "react";
import "../Styles/Home.css";
import PageTransition from "../Animation/PageTransitions";


function Home() {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="home">
          <h1>Hi, I'm Arda         
          </h1>
          <p>I like making fun, and interactive things with code.</p>
          
        </div>
      </div>
      </PageTransition>
  );
}

export default Home;
