import React, { useState } from "react";
import { useParams, useNavigate , NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import config from "../config";
import "./login.css";
import { Helmet } from 'react-helmet-async';

export default function ResetPassword() {
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setPopupMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${config.BASE_URL}/api/user/reset-password/${uid}/${token}/`,
        {
          method: "POST",
          body: JSON.stringify({ password, password2: confirmPassword }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setPopupMessage("Password changed successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setPopupMessage(data.detail || "Failed to change password.");
      }
    } catch (error) {
      setPopupMessage("Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <Helmet>
      <title>registration - vj nucleus</title>
    </Helmet>
      <section id="LogIn">
        <div className="login-left">
          <NavLink to="/">
            <img src={Logo} alt="Logo" />
          </NavLink>
          <h2>
            Start Your <span>Perfect</span>
            <br />
            Preparation Today
          </h2>
          <div className="login-bottom">
            <input
              type="password"
              id="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Your Password"
              disabled={loading}
            />

            <input
              type="password"
              id="input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm Password"
              disabled={loading}
            />

            <button
              onClick={handleResetPassword}
              className="login-btn"
              type="button"
              disabled={loading}
            >
              {loading ? "Changing..." : "Change Password"}
            </button>
          </div>
          {popupMessage && <div className="popup-message">{popupMessage}</div>}
        </div>
        <div className="login-right">
          <img src={vjsir} alt="VJ Sir" />
        </div>
      </section>
    </>
  );
}
