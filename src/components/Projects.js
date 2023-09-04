import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section>
<div className="row">
      <h4>These are the ones</h4>
      <div className="col-sm-4">
      <h3>This is the Home Component</h3>
      </div>






          <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {projects.map((project) => (
            
            <a
              href={project.link}
              key={project.image}
              className="px-8 relative py-4 border-2 border-gray-800">
              <div className="flex relative justify-center">
                <img
                  alt="gallery"
                  className="object-cover object-center rounded"
                  src={project.image}
                />
                
              </div>
              <div className="mt-2 mx-4 px-8 bg-gray-900"><h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p></div>
            </a>
            
          ))}
        </div>
      </div>
    </section>    
    </div>
    </section>
    
    
  );
}