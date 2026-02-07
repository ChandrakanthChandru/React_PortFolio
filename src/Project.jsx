import React, { useEffect } from "react";
import "./Project.css";
import LiquidEther from "./react-bits/LiquidEther";
const projects = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website to showcase projects, skills, and experience with a modern responsive UI.",
    features: [
      "Responsive design for mobile & desktop",
      "Project sections with clear descriptions",
      "Deployed on Vercel for fast performance",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React"],
    live: "https://portfolio-demo.vercel.app",
    github: "https://github.com/demo/portfolio-website",
  },
  {
    title: "Quiz Website",
    description:
      "Interactive quiz application with dynamic questions and automatic scoring.",
    features: [
      "Dynamic question rendering",
      "Automatic score calculation",
      "State management using React Hooks",
    ],
    stack: ["HTML", "CSS", "JavaScript", "React"],
    live: "https://quiz-app-demo.vercel.app",
    github: "https://github.com/demo/react-quiz-app",
  },
  {
    title: "Online Food Ordering System",
    description:
      "Console-based Java application for ordering food, managing menu items, and generating bills.",
    features: [
      "Menu-driven console interface",
      "Order selection & billing logic",
      "Object-oriented programming concepts",
    ],
    stack: ["Java", "OOP"],
    live: null,
    github: "https://github.com/demo/java-food-ordering",
  },
  {
    title: "Cricket Team Management System",
    description:
      "Hibernate-based console application to manage cricket teams and players with database persistence.",
    features: [
      "One-to-Many mapping using Hibernate & JPA",
      "CRUD operations with menu-driven console",
      "Role-based player fetching (Batsman, Bowler, Wicket Keeper)",
    ],
    stack: ["Java", "Hibernate", "JPA", "MySQL", "Maven"],
    live: null,
    github: "https://github.com/demo/cricket-team-management",
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Background layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      {/* Content (UNCHANGED) */}
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <ul className="project-features">
              {project.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            <div className="project-stack">
              {project.stack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
                aria-label="GitHub Repository"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
