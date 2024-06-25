import Logo from "../assets/images/logo.png";
import vjsir from "../assets/images/vjsir1.png";

import "./Otp.css";
import "./login.css";
export default function OTP() {
  return (
    <>
      <section className="OTP">
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
            />

            <button onClick={handleLogin} className="login-btn" type="submit">
              Confirm
            </button>

            <div className="otp-link">
              <a href="">Change E-mail</a>
              <div>
                <div className="otp-line"></div>
                <a href="">Request New Code</a>
              </div>
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
