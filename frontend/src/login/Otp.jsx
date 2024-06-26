import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./Otp.css";

export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email, mobile_no } = location.state || {};

  const handleVerifyOtp = async () => {
    let result = await fetch("http://127.0.0.1:8000/api/user/verify-otp/", {
      method: "POST",
      body: JSON.stringify({ otp, email, mobile_no }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();
    console.log(result);

    if (result.token) {
      localStorage.setItem("token", JSON.stringify(result.token));
      navigate("/login");
    } else {
      alert("Invalid or expired OTP");
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
            type="text"
            id="input"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOtp} className="login-btn" type="submit">
            Confirm
          </button>
          <div className="otp-link">
            <a href="/">Change E-mail</a>

            <div className="otp-line"></div>
            <a href="/">Request New Code</a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="" />
      </div>
    </section>
  );
}
