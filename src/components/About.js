import React from "react";
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Contact from "./Contact";


export default function About() {
  return (
    <section id="about">
        <div className="row align-items-left">
          <div className="col-md-6 p-5">
            <h2 className="heading animated-text" id="animatedText">Hello, I'm Joseph.</h2>
            <p className="aboutMe">
              I specialize in developing web and mobile applications.
              <br /><br />
              I have a strong background in ASP.NET Core, I excel in backend development,
              designing scalable and high-performance applications. I have experience in microservices
              architecture, third-party service integrations, and implementing secure, optimized backend solutions.
              I am passionate about solving complex system challenges, enhancing performance,
              and leveraging cloud technologies for modern software development.
            </p>
            
            <div className="flex justify-center">
              <NavLink className="btn btn-secondary" to="/projects">
                      See My Past Work
                    </NavLink>
            </div>
          </div>
          <div className="col-md-6 p-5">
          <h2 className="heading">Skills</h2>
            <ul className="list-group mb-4">
              <li className="list-group-item"><strong>Programming Languages:</strong> C#, JavaScript, Kotlin</li>
              <li className="list-group-item"><strong>Back-End Development:</strong> ASP.NET Core, Entity Framework Core, Web API, TDD</li>
              <li className="list-group-item"><strong>Microservices & API Development:</strong> REST API, GraphQL, API Gateways, RabbitMQ</li>
              <li className="list-group-item"><strong>Cloud & DevOps:</strong> Microsoft Azure, Azure DevOps, CI/CD Pipelines, Git</li>
              <li className="list-group-item"><strong>Security & Performance:</strong> JWT Authentication, OAuth, Identity Server</li>
              <li className="list-group-item"><strong>Database Management:</strong> Microsoft SQL Server, MySQL, NoSQL Databases, Firebase</li>
              <li className="list-group-item"><strong>Frameworks & Libraries:</strong> React.js, Bootstrap, jQuery</li>
              <li className="list-group-item"><strong>Project Management:</strong> Agile, Scrum, Kanban</li>
            </ul>
          </div>
        </div>
        <Contact></Contact>
      </section>

      
  );
}