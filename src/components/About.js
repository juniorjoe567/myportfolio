import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from 'react-router-dom';


export default function About() {
  return (
    <section id="about">
      <div className="row mt-5">
        <div className="col-sm-6 p-5">
       <h2> Hi, I'm Joseph.</h2>
        <br className="hidden lg:inline-block" />I build web and mobile apps.
        <p className="mb-8 leading-relaxed">
            I am a Microsoft Certified self taught software developer.
            I aim at creating unique, innovative, reliable and accessible software solutions.<br/> 
            These range from Web Applications to Cross Platform Mobile Applications. <br/>With the Technologies in my docket,
            I can get work done in a short period of time.

        </p>
            <div className="flex justify-center">
            <NavLink className="btn btn-info" to="/contact">
            Work With Me
            </NavLink>
              {/* <a
                href="#contact"
                className="btn btn-info" style={{marginRight:"10px"}}>
                Work With Me
              </a> */}
              {/* <a
                href="#projects"
                className="btn btn-primary">
                See My Past Work
              </a> */}
          </div>
        </div>
        <div className="col-sm-6 text-center">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./photo.jpeg"
            width={200}
          />
        </div>
      </div>
    </section>
  );
}