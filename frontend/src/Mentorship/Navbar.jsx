import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import "./Navbar.css";
import axiosInstance from "../refresh";
import config from "../config"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = localStorage.getItem("access_token" || "refresh_token");
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await axiosInstance.get(
            `${config.BASE_URL}/api/user/profile/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUserName(response.data.name);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };
    fetchUserData();
  }, []);

  const logout = async () => {

        localStorage.clear();
        navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id="Navbar">
        <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className="Nav-item">
            <ul>
              <li>
                <NavLink className="links" to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Resource" onClick={toggleMenu}>
                  Resource
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="links"
                  to="/Mentorship"
                  onClick={toggleMenu}
                >
                  Mentorship
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/AboutUs" onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>
              <li>
                {auth ? (
                  <NavLink onClick={logout} to="/login">
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

          <div className="profile">
            <img src={Profile} alt="Profile" />
            <button>
              {userName ? (
                <NavLink to="/profile">{userName}</NavLink>
              ) : (
                <NavLink to="/profile">Profile</NavLink>
              )}
            </button>
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
      </section>
    </>
  );
}
