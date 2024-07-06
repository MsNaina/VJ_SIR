import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
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
      const response = await fetch("http://127.0.0.1:8000/api/user/login/", {
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
          <input
            type="password"
            id="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            disabled={loading} 
          />
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
  );
}
