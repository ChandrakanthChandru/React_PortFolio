import React from "react";
import "./Skills.css";
import MagicBento from "./react-bits/MagicBento";

// Skill data
const skills = [
  { name: "Java", logo: "/java.svg", level: 70 },
  { name: "SQL", logo: "/sql.svg", level: 75 },
  { name: "MySQL", logo: "/mysql.svg", level: 75 },
  { name: "HTML", logo: "/html.svg", level: 80 },
  { name: "CSS", logo: "/css.svg", level: 80 },
  { name: "JavaScript", logo: "/js.svg", level: 70 },
  { name: "React", logo: "/react.svg", level: 60 },
  { name: "Spring", logo: "/spring.svg", level: 50 },
];

const Skills = () => {
  return (
    <section className="skills-container">
      {/* Background Effect */}
      <div className="skills-background">
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </div>

      {/* Content */}
      <h1 className="skills-title">My Skills</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img
              src={skill.logo}
              alt={skill.name}
              className="skill-logo"
            />

            <h3>{skill.name}</h3>

            <div className="skill-bar">
              <div
                className="skill-level"
                style={{
                  width: `${skill.level}%`,
                  backgroundColor:
                    skill.level >= 75
                      ? "#4f46e5"
                      : skill.level >= 60
                      ? "#6366f1"
                      : "#a5b4fc",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
