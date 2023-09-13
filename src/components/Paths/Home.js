import React from "react";
import "../Styles/Home.css";
import PageTransition from "../Animation/PageTransitions";

function Home() {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="home">
          <h1 className="intro-text" data-text="I'M ARDA KILINÇ">
            <mark className="mark">I'M ARDA KILINÇ</mark>
            </h1>
          <p>I like making fun, and interactive things with code.</p>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;