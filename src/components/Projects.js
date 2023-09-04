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
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="">
            Apps I've Built
          </h1>
          <p className="">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p>
        </div>
        <div  className='row' style={{marginTop: '10px'}}>

        {projects.map((project)=>
              <div key={project.id} className='col-sm-6 text-center pb-3'>
                  <div className="p-3" style={{border:"2px solid #1f2937"}}>
                  <a
                    href={project.link}
                    key={project.image}
                    className=""
                    >
                    <div className="flex relative justify-center">
                      <img
                        alt="gallery"
                        className="object-cover object-center rounded"
                        width={400}
                        src={project.image}
                      />
                      
                    </div>
                    <div className=""><h3 className="text-center">{project.title}</h3>
                        <h5 className="">
                          {project.subtitle}
                        </h5>
                        <p className="leading-relaxed">{project.description}</p></div>
                  </a>
                    </div>
              </div>

              )

          }
        
        </div>
      </div>
    </section>    
    </div>
    </section>
    
    
  );
}