// import "./login.css";
// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import Logo from "../assets/images/logo.png";
// import vjsir from "../assets/images/vjsir1.png";

// export default function SignUp() {
//   const [Name, setName] = useState("");
//   const [Password, setPassword] = useState("");
//   const [Mail, setMail] = useState("");
//   const [Number, setNumber] = useState("");
//   const [Password2, setPassword2] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem("token");
//     if (auth) {
//       navigate("/");
//     }
//   }, [navigate]);

//   const checkdata = async () => {
//     console.log(Name, Password, Password2, Mail, Number);

//     let result = await fetch(
//       "http://127.0.0.1:8000/api/user/website-register/",
//       {
//         method: "POST",
//         body: JSON.stringify({
//           name: Name,
//           email: Mail,
//           password: Password,
//           mobile_no: Number,
//           password2: Password2,
//         }),
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     result = await result.json();
//     console.log("API Response:", result);
//     if (
//       result.msg === "User registered successfully. Check your email for OTP."
//     ) {
//       console.log("success");
//       navigate("/otp", { state: { email: Mail, mobile_no: Number } });
//     } else {
//       console.log("Registration failed");
//     }
//   };

//   return (
//     <section id="LogIn">
//       <div className="login-left">
//         <NavLink to="/">
//           <img src={Logo} alt="" />
//         </NavLink>
//         <h2>
//           Start Your <span>Perfect</span>
//         </h2>
//         <h2>Preparation Today</h2>
//         <div className="login-bottom">
//           <input
//             type="text"
//             id="input"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             placeholder="Name"
//           />
//           <input
//             type="tel"
//             id="input"
//             value={Number}
//             onChange={(e) => setNumber(e.target.value)}
//             required
//             placeholder="Mobile No."
//           />
//           <input
//             type="email"
//             id="input"
//             value={Mail}
//             onChange={(e) => setMail(e.target.value)}
//             required
//             placeholder="Email"
//           />
//           <input
//             type="password"
//             id="input"
//             value={Password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             placeholder="Password"
//           />
//           <input
//             type="password"
//             id="input"
//             value={Password2}
//             onChange={(e) => setPassword2(e.target.value)}
//             required
//             placeholder="Confirm Password"
//           />
//           <button className="login-btn" onClick={checkdata} type="submit">
//             Request OTP
//           </button>
//           <div className="register-link">
//             <p>
//               Already have an account? <NavLink to="/login">Log In</NavLink>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="login-right">
//         <img src={vjsir} alt="" />
//       </div>
//     </section>
//   );
// }

import "./login.css";
import React, { useState, useEffect } from "react";
// import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";

export default function SignUp() {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password2, setPassword2] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignUp = async () => {

    console.log("SignUp initiated with data:", {
      Name,
      Password,
      Password2,
      Mail,
      Number,
    });

    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(Number)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    navigate("/otp", {
      state: { email: Mail, mobile_no: Number },
    });

    try {

      const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
        method: "POST",
        body: JSON.stringify({
          name: Name,
          email: Mail,
          password: Password,
          mobile_no: Number,
          password2: Password2,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();
      console.log("API Response:", result);
      console.log("email" ,Mail)
      
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
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error during signup. Please try again later.");
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
          <input
            type="tel"
            id="input"
            value={Number}
            onChange={(e) => setNumber(e.target.value)}
            required
            placeholder="Mobile No."
          />
          <input
            type="email"
            id="input"
            value={Mail}
            onChange={(e) => setMail(e.target.value)}
            required
            placeholder="Email"
          />
          <input
            type="password"
            id="input"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <input
            type="password"
            id="input"
            value={Password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            placeholder="Confirm Password"
          />
          <button className="login-btn" onClick={handleSignUp} type="button">
            Request OTP
          </button>
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
