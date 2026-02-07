import React from "react";
import "./Education.css";
import LiquidChrome from "./react-bits/LiquidChrome";

const Education = () => {
  return (
    <article>
      {/* Background layer (CSS already targets this) */}
      <div>
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
          <LiquidChrome
            baseColor={[0.1, 0.1, 0.1]}
            speed={1}
            amplitude={0.6}
            interactive={true}
          />
        </div>
      </div>

      {/* Content layer */}
      <div className="education-container">
        <div className="education-card">
          <h2 className="college-name">
            St Thomas College Of Arts & Science, Chennai
          </h2>

          <p className="degree">
            <strong>Degree:</strong> B.Sc in Computer Science
          </p>
          <p className="score">
            <strong>Score:</strong> 70%
          </p>
          <p className="duration">
            <strong>Duration:</strong> 2021 - 2024
          </p>

          <div className="section">
            <h3>Overview</h3>
            <p>
              A reputed institution offering quality education in arts and sciences.
              Focused on acquiring strong fundamentals in programming, data structures,
              algorithms, and web development.
            </p>
          </div>

          <div className="section">
            <h3>Key Subjects & Skills</h3>
            <ul>
              <li>Programming Languages: Java, JavaScript</li>
              <li>Web Development: HTML, CSS, React.js</li>
              <li>Database Management: SQL</li>
            </ul>
          </div>

          <div className="section">
            <h3>Projects & Achievements</h3>
            <ul>
              <li>Portfolio Website showcasing projects and skills</li>
              <li>Quiz Application using React with scoring system</li>
              <li>Consistently scored 70% in B.Sc throughout the course</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Education;
