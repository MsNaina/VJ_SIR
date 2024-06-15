import "./login.css";
import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png"
import vjsir from "../assets/images/L-VJ sir.png";
import Textimg from "../assets/images/LVJ SIR1.png";
import login from "../assets/images/loginimg.png";
export default function Login() {
  return (
    <>
      <section id="LogIn">
        <div className="login-left">
          <div className="login-top">
            <NavLink to="/">
              <img src={Logo} alt="" />
            </NavLink>

            <h2>
              Start Your <span>Perfect</span>
              <br />
              Preparation Today
            </h2>
            
          </div>

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

            {/* <a id="forgot" href="#forgot">Forgot Password ?</a> */}

            <button className="login-btn" type="submit">
              Log In
            </button>

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/Signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <img src={vjsir} alt="" />

          <div className="login-text1">
            <img src={Textimg} alt="" />

            <p>
              Get Your <br />
              Perfect Mentor <br />
              Today!!
            </p>
          </div>

          <div className="login-text2">
            <p>Get Your DPPs Customized As Per Your Need!!</p>
          </div>

          <div className="login-text3">
            <p>Vishal Joshi VJ Sir</p>
          </div>

          <img className="login-img" src={login} alt="" />
        </div>
      </section>
    </>
  );
}
