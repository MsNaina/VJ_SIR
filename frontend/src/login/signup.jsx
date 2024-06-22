import "./login.css";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";

export default function SignUp() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password2, setPassword2] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const checkdata = async () => {
    console.log(Name, Password, Password2, Mail, Number);

    let result = await fetch("http://127.0.0.1:8000/api/user/register/", {
      method: "POST",
      body: JSON.stringify({
        name: Name,
        email: Mail,
        password: Password,
        mobile_no: Number,
        password2: Password2,
      }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log("API Response:", result);
    if (result.token) {
      console.log("success");

      localStorage.setItem("token", JSON.stringify(result.token));
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/login");
    } else {
      console.log("Registration failed");
    }
  };

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
            <input
              type="text"
              id="input"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
            />

            <input
              type="tel"
              id="input"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
              required
              placeholder="Mobile No."
            />

            <input
              type="email"
              id="input"
              value={Mail}
              onChange={(e) => setMail(e.target.value)}
              required
              placeholder="Email"
            />

            <input
              type="password"
              id="input"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <input
              type="password"
              id="input"
              value={Password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              placeholder="Confirm Password"
            />

            <button className="login-btn" onClick={checkdata} type="submit">
              Sign Up
            </button>

            <div className="register-link">
              <p>
                Already have an account? <NavLink to="/login">Log In</NavLink>
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
