import "./login.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Login() {
  return (
    <>
      <section id="LogIn">
        <div className="login-left">
          <div className="login-top">
            <img src="images\logo.png" alt="" />

            <h2>
              Start Your <span>Perfect</span>
            </h2>
            <h2>Preparation Today</h2>

            <div className="loginWith">
              <img src="images\apple.png" alt="" />

              <img src="images\google.png" alt="" />

              <img src="images\FB.png" alt="" />
            </div>

            <h3>or</h3>
          </div>

          <div className="login-bottom">
            <input type="text" name="" id="input" required placeholder="Name" />

            <input
              type="email"
              name=""
              id="input"
              required
              placeholder="E-mail"
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
                New to our website? <Link to="/Signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="login-right">
          <img src="images\L-VJ sir.png" alt="" />

          <div className="login-text1">
            <img src="images\LVJ SIR1.png" alt="" />

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

          <img className="login-img" src="images\loginimg.png" alt="" />
        </div>
      </section>
    </>
  );
}
