import React from "react";
import HeroArt from "./HeroArt"; 

const skills = [
  { name: "C# & ASP.NET Core", icon: "bi-filetype-cs" },
  { name: "Microservices Architecture", icon: "bi-diagram-3-fill" },
  { name: "React.js & JavaScript", icon: "bi-arrow-repeat" },
  { name: "RESTful APIs", icon: "bi-braces-asterisk" },
  { name: "Microsoft SQL Server & EF Core", icon: "bi-server" },
  { name: "Docker", icon: "bi-docker" },
  { name: "Microsoft Azure & CI/CD", icon: "bi-cloud-arrow-up" },
  { name: "Agile & Scrum Methodologies", icon: "bi-kanban" },
];

export default function About() {
  return (
    <React.Fragment>
      <section id="about" className="container py-5">
        <div className="row align-items-center hero-split-screen">
          <div className="col-lg-7 text-center text-lg-start"> 
            <h1 className="hero-title">
              Full-Stack Developer &<br />
              <span className="highlight-text">Problem Solver.</span>
            </h1>
            {}
            <p className="lead text-muted mb-4 mx-auto mx-lg-0">
              Based in <span className="highlight-text">Kampala</span>, I craft
              high-performance web applications, transforming complex ideas into
              elegant, scalable software.
            </p>
            <a href="#skills" className="btn btn-primary-custom">
              See My Skills
            </a>
          </div>
          <div className="col-lg-5">
            <HeroArt />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Core Competencies</h2>
            <p className="lead text-muted">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="skills-grid-new">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item-new">
                <i className={`${skill.icon} skill-icon-new`}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}