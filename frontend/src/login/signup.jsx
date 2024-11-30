import "./login.css";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";
import config from "../config";
import { Helmet } from 'react-helmet-async';
export default function SignUp() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [emailExistsError, setEmailExistsError] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  
  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignUp = async () => {
    setLoading(true);
    setEmailExistsError(false);

    const mobileNumberPattern = /^[0-9]{10}$/;
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

    let validationErrors = {};

    if (!mobileNumberPattern.test(Number)) {
      validationErrors.Number = "Please enter a valid 10-digit mobile number.";
    }

    if (!emailPattern.test(Mail)) {
      validationErrors.Mail = "Please enter a valid email address.";
    }

    if (Password !== Password2) {
      validationErrors.Password2 = "Passwords do not match.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          `${config.BASE_URL}/api/user/website-register/`,
          {
            method: "POST",
            body: JSON.stringify({
              name: Name,
              email: Mail,
              password: Password,
              mobile_no: Number,
              password2: Password2,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const result = await response.json();

        if (
          result.msg ===
          "OTP sent to your email. Please verify to complete registration."
        ) {
          navigate("/otp", {
            state: { email: Mail, mobile_no: Number },
          });
        } else if (result.error?.email?.[0] === "user with this Email already exists.") {
          setEmailExistsError(true);
          setTimeout(() => setEmailExistsError(false), 4000);
          setLoading(false);
        } else {
          setErrors({ form: result.error?.email?.[0] || "Error during signup. Please try again later." });
          setLoading(false);
        }
      } catch (error) {
        setErrors({ form: "Error during signup. Please try again later." });
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <>
    <Helmet>
      <title>Signup - VJ Nucleus</title>
    </Helmet>
    <section id="LogIn">
      <div className="login-left">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <h2>
          Start Your <span>Perfect</span> <br /> Preparation Today
        </h2>
        <div className="login-bottom">

          <input
            type="text"
            id="input"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
          {errors.Name && <p className="error">{errors.Name}</p>}

          <input
            type="tel"
            id="input"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="Mobile No."
          />
          {errors.Number && <p className="error">{errors.Number}</p>}

          <input
            type="email"
            id="input"
            value={Mail}
            onChange={(e) => setMail(e.target.value)}
            required
            placeholder="Email"
          />
          {errors.Mail && <p className="error">{errors.Mail}</p>}

          <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    id="input"
    value={Password}
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
          {errors.Password && <p className="error">{errors.Password}</p>}

           <div className="password-container">
  <input
    type={showPassword2 ? "text" : "password"}
    id="input"
    value={Password2}
    onChange={(e) => setPassword2(e.target.value)}
    required
    placeholder="Confirm Password"
    disabled={loading}
  />
  <i
    className={`password-icon ${showPassword2 ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}`}
    onClick={() => setShowPassword2(!showPassword2)}
  ></i>
           </div>
           {errors.Password2 && <p className="error">{errors.Password2}</p>}
          <button
            className="login-btn"            
            onClick={handleSignUp}
            type="button"
            disabled={loading}
          >
            {loading ? "Requesting OTP..." : "Request OTP"}
          </button>
          {emailExistsError && (
            <p className="error">User with this Email already exists.</p>
          )}
          {errors.form && <p className="error">{errors.form}</p>}

          <div className="register-link">
            <p>
              Already have an account? <NavLink to="/login">Log In</NavLink>
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
