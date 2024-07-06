import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";

export default function Email() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("access_token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    setLoading(true);
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/user/send-reset-password-email/",
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("Login response:", data);
      if (response.ok) {
        alert("OTP sent successfully. Please check your email.");
      } else {
        alert(data.detail || "Request failed. Please check your Email.");
      }
    } catch (error) {
      console.error("Email verification error:", error);
      alert("Request failed. Please check your Email.");
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
          <button
            onClick={handleLogin}
            className="login-btn"
            type="button"
            disabled={loading}
          >
            {loading ? "Getting OTP..." : "Get OTP"}
          </button>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="" />
      </div>
    </section>
  );
}
