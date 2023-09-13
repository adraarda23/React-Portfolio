import React from "react";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import PageTransition from "../Animation/PageTransitions";

function Home() {
  const variants = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    <PageTransition>
      <div className="home-container">
        <div className="home">
          <motion.h1
            className="intro-text"
            data-text="I'M ARDA KILINÇ"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <mark className="mark">I'M ARDA KILINÇ</mark>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1.8, delay: 2 } }}
          >
            I like making fun, and interactive things with code.
          </motion.p>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;
