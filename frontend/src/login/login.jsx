import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";
import config from "../config"
import { Helmet } from 'react-helmet-async';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    setLoading(true); 
  
    try {
      const response = await fetch(`${config.BASE_URL}/api/user/login/`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Login failed");
      }
      const data = await response.json();
    

      localStorage.setItem("access_token", data.token.access);
      localStorage.setItem("refresh_token", data.token.refresh);

      navigate("/");
    } catch (error) {
     
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
    <Helmet>
      <title>Login - VJ Nucleus</title>
    </Helmet>
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
            disabled={loading}
          />
        <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    id="input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    placeholder="Password"
    disabled={loading}
  />
  <i
    className={`password-icon ${showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`}
    onClick={() => setShowPassword(!showPassword)}
  ></i>
</div>

          <button
            onClick={handleLogin}
            className="login-btn"
            type="button"
            disabled={loading} 
          >
            {loading ? "Logging in..." : "Log In"}{" "}
            
          </button>
          <div className="register-link">
            <NavLink className="forgot"to="/email">Forgot Password?</NavLink>
            <p>
              Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
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
