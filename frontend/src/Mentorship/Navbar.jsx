import { Link } from "react-router-dom";
import React from "react";

import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <section id="Navbar">
        <div className="Navbar">
          <div className="logo">
            <img src="images\logo.png" alt="" />
          </div>

          <div className="profile">
            <div profile-img>
              <img src="images\profile.png" alt="" />
            </div>
            <div>Profile</div>
          </div>

          <div className="Nav-item">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <Link to="/Mentorship">Mentorship</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
