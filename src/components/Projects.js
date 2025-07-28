import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Apps I've Built</h2>
        <p className="lead text-muted">A selection of my personal and professional work.</p>
      </div>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-md-6 col-lg-6">
            <div className="card project-card h-100">
              <div className="card-img-container">
                <img src={project.image} className="card-img-top" alt={project.title} />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted flex-grow-1">{project.description}</p>
                
                <div className="tech-stack-pills mb-3">
                  {project.subtitle.split(", ").map((tech) => (
                    <span key={tech} className="badge tech-pill">{tech}</span>
                  ))}
                </div>

                <a 
                  href={project.link || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`btn btn-sm btn-outline-primary-custom ${!project.link && 'disabled'}`}
                >
                  {project.link ? 'View Project' : 'Private Repo'}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}