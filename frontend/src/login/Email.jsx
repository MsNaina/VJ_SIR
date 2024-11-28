import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import "./login.css";
import config from "../config";
import { Helmet } from "react-helmet-async";

const Email = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showForm, setShowForm] = useState(true); // State to control form visibility

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${config.BASE_URL}/api/user/send-reset-password-email/`,
        {
          method: "POST",
          body: JSON.stringify({ email }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setMessage(data.msg);
        setMessageType("success");
        setShowForm(false); 
      } else {
        setMessage(data.msg);
        setMessageType("error");
        setEmail("");
      }
    } catch (error) {
      setMessage(data.msg);
      setMessageType("error");
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
            <img src={Logo} alt="" />
          </NavLink>
          <h2>
            Start Your <span>Perfect</span>
            <br />
            Preparation Today
          </h2>
          <div className="login-bottom">
            {showForm ? (
              <>
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
                  {loading ? "Sending Request..." : "Send Request"}
                </button>
              </>
            ) : (
              <div className={`message ${messageType}`}>{message}</div>
            )}
          </div>
        </div>
        <div className="login-right">
          <img src={vjsir} alt="" />
        </div>
      </section>
    </>
  );
};

export default Email;
