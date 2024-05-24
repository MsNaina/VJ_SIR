import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const [text] = useTypewriter({
    words: [
      " Educator",
      "Mentor",
      "Author",
      "Motivational Speaker",
      "God of Inorganic Chemistry",
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 50,
  });

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
                <h1>VJ Sir - Your</h1>

                <h2 className="header-typewriter">
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    {text}
                  </span>
                  <span>
                    <Cursor />
                  </span>
                </h2>

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
                    <Link to="/Logout">Logout</Link>
                  </li>
                </ul>
              </div>

              <img src="images\VJ SIR.png" alt="" />
            </div>

            <div className="header-slider">
              <div className="header-slide-track">
                <div className="header-slide">
                  <img src="images\IITR-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\IITBHU-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\JT-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\TEDx.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\IITR-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\IITBHU-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\JT-logo 2.png" alt="" />
                </div>

                <div className="header-slide">
                  <img src="images\TEDx.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
