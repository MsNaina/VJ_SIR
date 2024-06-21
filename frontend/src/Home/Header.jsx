import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header.css";
import Typewriter from "./typewriter";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import VJsir from "../assets/images/VJ SIR.png";

export default function Header() {
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUserName(user.name);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="Header">
        <div className="Header">
          <div className="header-left">
            <div className="header-top">
              <div className="header-logo">
                <img src={Logo} alt="" />
              </div>

              <div className="Header-profile">
                <img src={Profile} alt="" />
                <button>
                  {userName ? (
                    <Link to="/profile">{userName}</Link>
                  ) : (
                    <Link to="/profile">Profile</Link>
                  )}
                </button>
              </div>
            </div>

            <div className="header-bottom">
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
            </div>
          </div>

          <div className="header-right">
            <div className="header-img">
              <div className="header-Nav-items">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Resource">Resource</Link>
                  </li>
                  <li>
                    <Link to="/Mentorship">Mentorship</Link>
                  </li>
                  <li>
                    <Link to="/Aboutus">About Us</Link>
                  </li>
                  <li>
                    {auth ? (
                      <Link onClick={logout} to="/Signup">
                        Logout
                      </Link>
                    ) : (
                      <Link to="/login">Login</Link>
                    )}
                  </li>
                </ul>
              </div>

              <img src={VJsir} alt="" />
            </div>

            {/* <Autoplay /> */}
          </div>
        </div>
      </section>
    </>
  );
}
