import "./mobileNo.css";
import Mobile from "../assets/images/Mobilenumber.png";
import React, { useState } from "react";
import axios from "axios";

export default function MobileNo({ onClose }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const accessToken = localStorage.getItem("access_token");

  const handleRequestOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/user/mobile-otp/",
        { mobile_no: mobileNumber },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert("OTP requested successfully!");
    } catch (error) {
      alert("Failed to request OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="mobileno">
        <div className="Mobileno-left">
          <img src={Mobile} alt="" />
        </div>
        <div className="Mobileno-right">
          <h2>Verify your Mobile No.</h2>
          <input
            id="Mobilenumber"
            type="text"
            required
            placeholder="Enter Your Mobile No."
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className="mobileotprequest">
            <button onClick={handleRequestOtp} disabled={loading}>
              {loading ? "Requesting..." : "Request OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
