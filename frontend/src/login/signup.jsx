import "./signup.css";
import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/L-VJ sir.png";
import Textimg from "../assets/images/LVJ SIR1.png";
import login from "../assets/images/loginimg.png";

export default function SignUp() {
  return (
    <>
      <section className="SignUp">
        <div className="signup-left">
          <div className="signup-top">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>

            <h2>
              Start Your <span>Perfect</span>
            </h2>
            <h2>Preparation Today</h2>
          </div>

          <div className="signup-bottom">
            <input type="text" name="" id="input" required placeholder="Name" />

            <input type="text" name="" id="input" required placeholder="City" />

            <input type="text" name="" id="input" required placeholder="Class" />

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

            <button className="signup-btn" type="submit">
              Sign Up
            </button>

            <div className="login-link">
              <p>
                Already have an account? <Link to="/Login">Log In</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <img src={vjsir} alt="" />

          <div className="signup-text1">
            <img src={Textimg} alt="" />

            <p>
              Get Your <br />
              Perfect Mentor <br />
              Today!!
            </p>
          </div>

          <div className="signup-text2">
            <p>Get Your DPPs Customized As Per Your Need!!</p>
          </div>

          <div className="signup-text3">
            <p>Vishal Joshi VJ Sir</p>
          </div>

          <img className="signup-img" src={login} alt="" />
        </div>
      </section>
    </>
  );
}
