import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section>
      <div className="row">
        <section id="projects" className="">
          <div className="container">
            <div className="flex flex-col text-center p-4">
              {/* <CodeIcon className="mx-auto inline-block w-2 mb-4" /> */}
              <h2 className="">Apps I've Built</h2>
              <p className="">
                Through out my experience as a developer, below are some of the
                personal research projects I have done to enhance my craft;
              </p>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              {projects.map((project) => (
                <div key={project.id} className="col-sm-6 text-center pb-3">
                  <div className="p-3" style={{ border: "2px solid #f0f0f0" }}>
                    <a
                      href={project.link}
                      key={project.image}
                      className=""
                      target="_blank"
                    >
                      <div className="flex relative justify-center">
                        <img
                          alt="gallery"
                          className="rounded image-responsive"
                          width={"80%"}
                          src={project.image}
                        />
                      </div>
                      <div className="">
                        <h5
                          className="text-center mt-4 project-title"
                          style={{ fontWeight: "bold" }}
                        >
                          {project.title}
                        </h5>
                        <span className="techs" style={{ color: "#0d919f" }}>
                          {project.subtitle}
                        </span>
                        <p className="leading-relaxed p-3">{project.description}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
