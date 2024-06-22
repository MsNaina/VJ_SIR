import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./Header.css";
import Typewriter from "./typewriter";
import VJsir from "../assets/images/VJ SIR.png";
import Navbar from "../Mentorship/Navbar";
import IITR from "../assets/images/IITR-logo 2.png";
import IITBHU from "../assets/images/IITBHU-logo 2.png";
import JT from "../assets/images/JT-logo 2.png";
import TEDx from "../assets/images/TEDx.png";

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <section id="Header">
        <div className="header">
          <div className="header-left">
            <div className="header-text">
              <p className="p1">Embark on your JEE Main & Advanced</p>
              <h1>
                VJ Sir - <span>Your</span>{" "}
              </h1>

              <Typewriter />

              <p className="p2">
                With his expert guidance and AI-driven matching, you'll be
                paired with top IITians to mentor and monitor your progress
                every step of the way. Join us and unleash your potential for
                success in IIT JEE!
              </p>
            </div>

            <div className="header-btn">
              <button className="btn1">Buy Now</button>
              <button className="btn2" onClick={scrollToTop}>
                <Link to="/Mentorship">Know More</Link>
              </button>
            </div>

            <div className="Speaker">
              <img src={IITR} alt="" />
              <img src={IITBHU} alt="" />
              <img src={JT} alt="" />
              <img src={TEDx} alt="" />
            </div>
          </div>

          <div className="header-right">
            <img src={VJsir} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
