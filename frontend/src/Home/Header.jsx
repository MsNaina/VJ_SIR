import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import Autoplay from "./autoplay";
import Typewriter from "./typewriter";

export default function Header() {
  return (
    <>
      <section id="Header">
        <div className="Header">
          <div className="header-left">
            <div className="header-top">
              <div className="header-logo">
                <img src="images\logo.png" alt="" />
              </div>

              <div className="Header-profile">
                <div className="header-profile">
                  <img src="images\profile.png" alt="" />
                </div>
                <div>Profile</div>
              </div>
            </div>

            <div className="header-bottom">
              <div className="header-text">
                <p className="p1">Embark on your JEE Main & Advanced</p>
                <h1>VJ Sir - <span>Your</span> </h1>

                <Typewriter />

                <p className="p2">
                  With his expert guidance and AI-driven matching, you'll be
                  paired with top IITians to mentor and monitor your progress
                  every step of the way. Join us and unleash your potential for
                  success in IIT JEE!
                </p>
              </div>

              <div className="header-btn">
                <button className="  btn1">Buy Mentorship</button>
                <button className="btn2">Know More</button>
              </div>
            </div>
          </div>

          <div className="header-right">
            <div className="header-img">
              <div className="Nav-items">
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

              <img src="images\VJ SIR.png" alt="" />
            </div>

            <Autoplay />
          </div>
        </div>
      </section>
    </>
  );
}
