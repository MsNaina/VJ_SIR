import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";

export default function Class() {
 
    const [Class, setClass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const accessToken = localStorage.getItem("access_token");
      const refreshToken = localStorage.getItem("refresh_token");

      if (accessToken && refreshToken) {
        navigate("/");
      }
    }, [navigate]);

    const handleNext = () => {
      const accessToken = "your-access-token";
      const refreshToken = "your-refresh-token";
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      navigate("/");
    };


  return (
    <section id="LogIn">
      <div className="login-left">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <h2>
          Start Your <span>Perfect</span>
          <br />
          Preparation Today
        </h2>
        <div className="login-bottom">
          <input
            type="text"
            id="input"
            value={Class}
            onChange={(e) => setClass(e.target.value)}
            required
            placeholder="Class"
          />
          <button onClick={handleNext} className="login-btn" type="button">
            Next
          </button>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="" />
      </div>
    </section>
  );
}
