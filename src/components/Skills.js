import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { technologies } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

export default function Skills() {
  return (
    <section id="skills" className="mb-5">
      <div className="container">
        <div className="flex flex-col w-full P-4">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <div className="flex flex-col text-center p-4">
            {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
            <h2 className="">Skills</h2>
            {/* <p className="">
            Through out my experience as a developer, below are some of the personal research projects I have done
          to enhance my craft;
          
          </p> */}
          </div>
        </div>
        <div className="">
          <h3 style={{ color: "black" }}>Front End Technologies</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
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
              <span className="title-font font-medium text-dark">React</span>
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
              <span className="title-font font-medium text-dark">
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
              <span className="title-font font-medium text-dark">
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
              <span className="title-font font-medium text-dark">JQuery</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 style={{ color: "black" }}>Back End Technologies</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
          <div className="col-sm-1 text-center p-2">
            <div className="">
              <img
                alt="gallery"
                className="object-cover object-center rounded"
                src="./images/microsoftnet.svg"
                width={40}
              />
            </div>
            <div className="">
              <span className="title-font font-medium text-dark">.Net</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 style={{ color: "black" }}>Languages</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
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
              <span className="title-font font-medium text-dark">C#</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 style={{ color: "black" }}>Databases</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
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
              <span className="title-font font-medium text-dark">MSSQL</span>
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
              <span className="title-font font-medium text-dark">Firebase</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 style={{ color: "black" }}>Mobile Technologies</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
          <div className="col-sm-1 text-center p-2">
            <div className="">
              <img
                alt="gallery"
                className="object-cover object-center"
                src="./images/android.svg"
                width={50}
              />
            </div>
            {/* <div className="">
              <span className="title-font font-medium text-dark">Android</span>
            </div> */}
          </div>
        </div>

        <div className="mt-5">
          <h3 style={{ color: "black" }}>Cloud Technologies</h3>
        </div>
        <hr />
        <div className="row" style={{ background: "#f0f0f0", padding: "5px" }}>
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
              <span className="title-font font-medium text-dark">
                Microsoft Azure
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
