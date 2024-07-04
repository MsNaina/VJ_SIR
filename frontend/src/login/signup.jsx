import "./login.css";
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";

export default function SignUp() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignUp = async () => {
      setLoading(true);
    console.log("SignUp initiated with data:", {
      Name,
      Password,
      Password2,
      Mail,
      Number,
    });

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
          "http://127.0.0.1:8000/api/user/website-register/",
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
        console.log("API Response:", result);

        if (
          result.msg ===
          "OTP sent to your email. Please verify to complete registration."
        ) {
          console.log("OTP sent to email. Redirecting to OTP page...");
          navigate("/otp", {
            state: { email: Mail, mobile_no: Number },
            
          });
        } else {
          console.log("Registration failed:", result);
           setLoading(false);
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setErrors({ form: "Error during signup. Please try again later." });
        setLoading(false);
      }
        } else {
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

          <input
            type="password"
            id="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          {errors.Password && <p className="error">{errors.Password}</p>}

          <input
            type="password"
            id="input"
            value={Password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            placeholder="Confirm Password"
          />
          {errors.Password2 && <p className="error">{errors.Password2}</p>}

          <button
            className="login-btn"
            onClick={handleSignUp}
            type="button"
            disabled={loading}
          >
            {loading ? "Requesting OTP..." : "Request OTP"}
          </button>
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
  );
}