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
          <h2 className="">
            Apps I've Built
          </h2>
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
                        className="object-cover object-center rounded image-responsive"
                        width={400}
                        src={project.image}
                      />
                      
                    </div>
                    <div className=""><h5 className="text-center mt-4" style={{fontWeight:"bold"}}><u>{project.title}</u></h5>
                        <h6 className="" style={{color:"#0d919f"}}>
                          {project.subtitle}
                        </h6>
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