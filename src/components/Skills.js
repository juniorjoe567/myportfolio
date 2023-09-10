import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import {technologies} from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="skills" className="mb-5">
      <div className="container">
      <div className="flex flex-col w-full P-4">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <div className="flex flex-col text-center p-4">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h2 className="">
            Skills
          </h2>
          {/* <p className="">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p> */}
        </div>

        </div>
        <div className=""><h3 style={{color:"white"}}>Front End Technologies</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/react.svg"
                    width={45}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    React
                  </span>
                </div>

          </div>

          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/javascript.svg"
                    width={40}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                  Javascript
                  </span>
                </div>

          </div>

          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/bootstrap.svg"
                    width={50}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                  Bootstrap
                  </span>
                </div>
          </div>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded bg-light"
                    src="./images/jquery.svg"
                    width={60}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                  JQuery
                  </span>
                </div>
          </div>
            
        </div>


        <div className="mt-5"><h3 style={{color:"white"}}>Back End Technologies</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/c_sharp.svg"
                    width={40}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    .Net Core
                  </span>
                </div>
          </div>
        </div>


        <div className="mt-5"><h3 style={{color:"white"}}>Languages</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/c_sharp.svg"
                    width={40}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    C#
                  </span>
                </div>
          </div>
        </div>



        <div className="mt-5"><h3 style={{color:"white"}}>Databases</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/sql_server.svg"
                    width={50}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    MSSQL
                  </span>
                </div>
          </div>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/firebase.svg"
                    width={30}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    Firebase
                  </span>
                </div>
          </div>
        </div>


        <div className="mt-5"><h3 style={{color:"white"}}>Mobile Technologies</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-1 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/android.svg"
                    width={50}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    Android
                  </span>
                </div>
          </div>
        </div>


        
        <div className="mt-5"><h3 style={{color:"white"}}>Cloud Technologies</h3></div>
        <hr/>
        <div className="row" style={{background:"#1f2937",padding:"5px"}}>
          <div className="col-sm-2 text-center p-2">
                <div className="">
                  <img
                    alt="gallery"
                    className="object-cover object-center rounded"
                    src="./images/azure.svg"
                    width={60}
                  />
                  
                </div>
                <div className="">
                  <span className="title-font font-medium text-white">
                    Microsoft Azure
                  </span>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}