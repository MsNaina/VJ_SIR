import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import "./Navbar.css";
import axios from "axios";

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
          const response = await axios.get(
            "http://127.0.0.1:8000/api/user/profile/",
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

  const logout = () => {
    // const refreshToken = localStorage.getItem("refresh_token");
    // const token = localStorage.getItem("access_token");
    // if (refreshToken && token) {
    //   try {
    //     await axios.post(
    //       "http://127.0.0.1:8000/api/user/logout/",
    //       {
    //         refresh: refreshToken,
    //       },
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );

        localStorage.clear();
        navigate("/login");
      // } catch (error) {
      //   console.error("Failed to logout:", error);
      // }
    // }
    // return;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id="Navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
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
