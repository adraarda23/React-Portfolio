import React from "react";
import "../Styles/Home.css";
import mainImage from "../../images/image.jpeg";
import PageTransition from "../Animation/PageTransitions";


function Home() {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="home">
          <div className="home-image">
            <img src={mainImage} alt="image" className="image" />
          </div>
          <h1>Hi I'm Arda Aydın Kılınç</h1>
          <p>
            Hello, I am <b>Arda Aydın Kılınç</b>. I am a{" "}
            <b>FullStack Developer</b>, and I enjoy working on web projects. I
            am particularly passionate about creating <b>user-friendly</b> and{" "}
            <b>interactive</b> web sites. I also have experience in{" "}
            <b>database management</b>. I specialize in web development and
            design. My curiosity about Quantum computers constantly leads me to
            explore new information. In my free time, I enjoy playing chess and
            reading science fiction books related to{" "}
            <b>artificial intelligence</b>. Coding is not just a hobby for me;
            it's a <b>passion</b>.
          </p>
        </div>
      </div>
      </PageTransition>
  );
}

export default Home;
