import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import {technologies} from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
      <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="flex relative justify-center sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Skills
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p> */}

        </div>
        <div className=""><h2 style={{color:"white"}}>Front End Technologies</h2></div>
        <div className="row" style={{background:"#1f2937"}}>
          {technologies.map((skill) => (
            <div key={skill.name} className="col-sm-4">
              <div className="">
                <img
                  alt="gallery"
                  className="object-cover object-center rounded"
                  src={skill.image}
                  width={80}
                />
                
              </div>
              <div className="">
                <span className="title-font font-medium text-white">
                  {skill.name}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}