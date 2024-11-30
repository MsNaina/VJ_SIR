import React, { useState , useEffect } from "react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

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
        setPopupMessage(data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setPopupMessage(data.msg);
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
      <title>Registration - VJ Nucleus</title>
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
          <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    id="input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    placeholder="Enter Your Password"
    disabled={loading}
  />
  <i
    className={`password-icon ${showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`}
    onClick={() => setShowPassword(!showPassword)}
  ></i>
</div>

<div className="password-container">
  <input
    type={showPassword2 ? "text" : "password"}
    id="input"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
    placeholder="Confirm Password"
    disabled={loading}
  />
  <i
    className={`password-icon ${showPassword2 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`}
    onClick={() => setShowPassword2(!showPassword2)}
  ></i>
</div>
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
