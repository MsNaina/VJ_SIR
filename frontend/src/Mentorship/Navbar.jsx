import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id="Navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="Nav-item">
            <ul>
              <li>
                <NavLink className="links" to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Resource" onClick={toggleMenu}>
                  Resource
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/Mentorship"
                  onClick={toggleMenu}
                >
                  Mentorship
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/AboutUs" onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Login" onClick={toggleMenu}>
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="profile">
            <img src={Profile} alt="Profile" />
            <button>
              <NavLink to="/profile" onClick={toggleMenu}>
                Profile
              </NavLink>
            </button>
          </div>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </section>
    </>
  );
}
