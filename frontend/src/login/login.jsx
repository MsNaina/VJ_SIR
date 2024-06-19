import "./login.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
export default function Login() {
  return (
    <>
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
              type="tel"
              name=""
              id="input"
              required
              placeholder="Mobile No."
            />

            <input
              type="Password"
              name=""
              id="input"
              required
              placeholder="Password"
            />

            <button className="login-btn" type="submit">
              Log In
            </button>

            <div className="register-link">
              <NavLink className="forgot">Forgot Password ?</NavLink>
              <p>
                Don't have an account ? <NavLink to="/Signup">Sign Up</NavLink>
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
