import "./profile.css";
import { NavLink, useNavigate} from "react-router-dom";
import Logo from "../assets/images/logo.png";
import info from "../assets/images/profile-info.png";
import React, { useState, useEffect } from "react";
export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setUserName(user.name);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/Signup");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id="user-Profile">
        <div className="user-profile">
          <div className="profile-top">
            <div className="profile-logo">
              <img src={Logo} alt="" />
            </div>

            <div className={`menu ${menuOpen ? "open" : ""}`}>
              <div className="profile-Nav-item">
                <ul>
                  <li>
                    <NavLink className="links" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Resource">Resource</NavLink>
                  </li>
                  <li>
                    <NavLink className=" links" to="/Mentorship">
                      Mentorship
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="links" to="/AboutUs">
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    {auth ? (
                      <NavLink onClick={logout} to="/Signup">
                        Logout
                      </NavLink>
                    ) : (
                      <NavLink to="/login" onClick={toggleMenu}>
                        Login
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>

          <div className="profile-bottom">
            <h2>Profile</h2>

            <div className="profile-info">
              <img src={info} alt="" />
              <h3>
                {userName ? (
                  <NavLink to="/profile">{userName}</NavLink>
                ) : (
                  <NavLink to="/profile">Profile</NavLink>
                )}
              </h3>
            </div>

            <div>
              <h2>Personal Information</h2>
              <div className="personal-info">
                <div className="profile-label">
                  <label htmlFor="">Mobile No.</label>
                  <input id="profile-input" type="tel" />
                </div>
                <div className="profile-label">
                  <label htmlFor="">Email ID</label>
                  <input id="profile-input" type="email" />
                </div>

                <div className="profile-label">
                  <label htmlFor="">City</label>
                  <input id="profile-input" type="text" />
                </div>
              </div>
            </div>

            <div>
              <h2>Academic Information</h2>
              <div className="acad-info">
                <label htmlFor="">Class</label>
                <input id="profile-input" type="text" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
