import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand-custom" href="/about">
          <span className="logo-box">R</span>
          <span className="logo-text">Rukeijakare</span>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                className="btn btn-primary-custom"
                href="https://docs.google.com/document/d/1jcVWmJRWagejqe3nuG98HjzSC5TgXFeu/edit?usp=sharing&ouid=110094816413758661200&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                View My CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}