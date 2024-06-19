import "./login.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
export default function SignUp() {
  return (
    <>
      <section id="LogIn">

        <div className="login-left">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>

          <h2>
            Start Your <span>Perfect</span>
          </h2>
          <h2>Preparation Today</h2>

          <div className="login-bottom">
            <input type="text" name="" id="input" required placeholder="Name" />

            <input type="text" name="" id="input" required placeholder="City" />

            <input
              type="text"
              name=""
              id="input"
              required
              placeholder="Class"
            />

            <input
              type="tel"
              name=""
              id="input"
              required
              placeholder="Mobile No."
            />

            <input
              type="email"
              name=""
              id="input"
              required
              placeholder="Email"
            />

            <input
              type="Password"
              name=""
              id="input"
              required
              placeholder="Password"
            />

            <button className="login-btn" type="submit">
              Sign Up
            </button>

            <div className="register-link">
              <p>
                Already have an account? <NavLink to="/Login">Log In</NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <img src={vjsir} alt="" />
        </div>
      </section>
    </>
  );
}
