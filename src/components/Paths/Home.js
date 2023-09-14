import React from "react";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import PageTransition from "../Animation/PageTransitions";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Home() {
  const variants = {
    hidden: { opacity: 0, y: -100 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };

  const iconVariants = {
    start: { x: 0 },
    end: { x: 5 }, 
  };

  const iconTransition = {
    duration: 0.5,
    repeat: Infinity, 
    repeatType: "reverse", 
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
            animate={{ opacity: 1, x: 0, transition: { duration: 1.5, delay: 1.5 } }}
          >
            I like making fun and interactive things with code.
          </motion.p>
          <motion.button
            className="home-btn"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.5, delay: 1.5 } }}
          >
            <Link to="/about">Details
            <motion.span
              style={{ fontSize: "medium", marginLeft: "5px" , display:"inline-block",color:"#000" }}
              variants={iconVariants}
              transition={iconTransition}
              animate="end" 
            >
              <KeyboardDoubleArrowRightIcon />
            </motion.span>
            </Link>
          </motion.button>
        </div>
      </div>
    </PageTransition>
  );
}

export default Home;
