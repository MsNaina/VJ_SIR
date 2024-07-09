import "./profile.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import info from "../assets/images/profile-info.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../refresh";
import config from "../config"
export default function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const auth = localStorage.getItem("access_token" || "refresh_token");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    mobile_no: "",
    email: "",
    student_class: "",
  });

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
          setUserData(response.data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };
    fetchUserData();
  }, []);
  const logout = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    try {
      await axios.post(
        `${config.BASE_URL}/api/user/logout/`,
        {
          refresh: refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.clear();
      navigate("/Signup");
    } catch (error) {
      alert("Error during logout. Please try again later.");
    }
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

            <div className={`profile-menu ${menuOpen ? "open" : ""}`}>
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
                {userData ? (
                  <NavLink to="/profile">{userData.name}</NavLink>
                ) : (
                  <NavLink to="/profile">Profile</NavLink>
                )}
              </h3>
            </div>

            <div>
              <h2>Personal Information</h2>
              <div className="personal-info">
                <div className="profile-label">
                  <label htmlFor="mobile_no">Mobile No.</label>
                  <input
                    id="profile-input"
                    type="tel"
                    value={userData.mobile_no}
                    readOnly
                  />
                </div>
                <div className="profile-label">
                  <label htmlFor="email">Email ID</label>
                  <input
                    id="profile-input"
                    type="email"
                    value={userData.email}
                    readOnly
                  />
                </div>
              </div>

              <div>
                <h2>Academic Information</h2>
                <div className="acad-info">
                  <label htmlFor="">Class</label>
                  <input
                    id="profile-input"
                    type="text"
                    value={userData.student_class}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
