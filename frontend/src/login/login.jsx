import "./login.css";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    console.log("email, password", email, password);

    let result = await fetch("http://127.0.0.1:8000/api/user/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }), // Use email and password
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);

    if (result.token) {
      // Adjust this according to your backend response structure
      localStorage.setItem("token", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter correct details");
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
            <br />
            Preparation Today
          </h2>

          <div className="login-bottom">
            <input
              type="email"
              id="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="E-mail"
            />

            <input
              type="password"
              id="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />

            <button onClick={handleLogin} className="login-btn" type="submit">
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
