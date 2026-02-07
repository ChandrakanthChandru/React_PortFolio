import React from "react";
import "./Home.css";
import TypingText from "./TypingText";
import Galaxy from "./react-bits/Galaxy";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Background */}
      <div className="background-layer">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      {/* Foreground Content */}
      <header className="home-container">
        <main className="home-main">
          {/* Introduction Section */}
          <section className="intro">
            <h1>
              Hi, I'm <span className="name">CHANDRAKANTH K</span>
            </h1>
            <h3>
              And I'm a{" "}
              <span className="typing">
                <TypingText />
              </span>
            </h3>
            <p>
              I am an entry-level software developer with a strong foundation in
              Java and full-stack web development. I have hands-on experience
              with Java, JDBC, Hibernate, HTML, CSS, JavaScript, and React, and I
              enjoy building responsive, user-friendly applications.
              <br />
              <br />
              Passionate about writing clean, maintainable code and continuously
              improving my technical skills. I am currently seeking an
              entry-level opportunity where I can contribute to real-world
              projects, learn from experienced developers, and grow as a
              professional software engineer.
            </p>
          </section>

          {/* About Me Section */}
          <section className="about">
            <h2>About Me</h2>
            <p>
              I enjoy exploring new technologies, solving challenging problems,
              and continuously learning to improve my skills. When I’m not
              coding, I like reading tech blogs, experimenting with UI/UX
              designs, and working on personal projects that enhance my
              creativity and knowledge.
            </p>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <h2>Let's Connect!</h2>
            <img
              src="/linkedIn profile.jpeg"
              alt="Chandrakant LinkedIn Profile"
              className="profile-image"
            />
            <p>
              I'm always open to exciting opportunities and collaborations. Feel
              free to reach out via{" "}
              <a href="mailto:chandruchandrkanth2004@gmail.com">email</a> or
              connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/chandrakanthchandru2004k/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>
        </main>
      </header>
    </div>
  );
};

export default Home;
