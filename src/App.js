import About from "./components/About";
import Contact from "./components/Contact";
import AppNavbar from "./components/AppNavbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
} from "react-router-dom";

export default function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className="container-fluid">
      {/* <main className="container">
        <AppNavbar/>
        <About /> 
      <Projects />
       <Skills/> 
       <Testimonials /> 
       <Contact />
     </main> */}

      <nav
        className="navbar navbar-expand-lg shadow-sm bg-white rounded"
        style={{ background: "white" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="./images/bitbucket.svg"
              alt="Bootstrap"
              width="30"
              height="24"
            />
            <span>
              <b>Rukeijakare</b>
            </span>
          </a>

          <button
            className="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto m-2 mb-lg-0">
              {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Projects</a>
        </li> */}
              <li
                className="nav-item mt-1 mb-1"
                style={{ marginRight: "10px" }}
              >
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li
                className="nav-item mt-1 mb-1"
                style={{ marginRight: "10px" }}
              >
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/projects"
                >
                  See My Past Work
                </NavLink>
              </li>
              <li
                className="nav-item mt-1 mb-1"
                style={{ marginRight: "10px" }}
              >
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/skills"
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item mt-1 mb-1">
                <NavLink
                  className="btn btn-light btn-outline-primary"
                  to="/contact"
                >
                  Get in touch
                </NavLink>
              </li>
              {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
            </ul>
            <div className="d-flex">
              <a
                className="nav-link active mt-1 mb-1"
                aria-current="page"
                target="_blank"
                href="https://drive.google.com/file/d/1drlu1GtYx0zBv_BL9xpongQrklWFw_1N/view?usp=drive_link"
              >
                <i>View My CV</i>
              </a>
            </div>
            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
      <Routes>
        <Route exact path="/about" element={<About />} />
        {/* <Route path="/" exact component={() => <About />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route exact path='/employee' element={<Employee/>}/> */}
        <Route path="/" element={<Navigate to="/about" />} />
      </Routes>
    </div>
  );
}
