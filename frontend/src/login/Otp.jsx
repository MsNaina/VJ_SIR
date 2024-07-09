import React, { useState } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import Cookies from "js-cookie";
import config from "../config";
export default function OTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state.email;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "otp" && !/^\d*$/.test(value)) return;
    if (name === "otp") setOtp(value);
    if (name === "email") setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        `${config.BASE_URL}/api/user/website-verify-otp/`,
        {
          params: {
            email: email,
          },
          otp,
        }
      );

      if (response.status === 200 || response.status === 201) {
        const { access, refresh, msg } = response.data.token;

        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);

        Cookies.set("session_id", access, { expires: 7 });

        navigate("/class");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
      }
      alert("Failed to verify OTP. Please try again later.");
    }
  };

  return (
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
            type="text"
            id="input"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            required
          />

          <button className="login-btn" type="submit" onClick={handleSubmit}>
            Confirm
          </button>
          <div className="otp-link">
            <a href="/Signup">Change E-mail</a>
          </div>
        </div>
      </div>
      <div className="login-right">
        <img src={vjsir} alt="vjsir" />
      </div>
    </section>
  );
}
