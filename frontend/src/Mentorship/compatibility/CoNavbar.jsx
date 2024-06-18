import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./CoNavbar.css";
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/profile.png";
export default function CompatibilityNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="CompatibilityNav">
        <div className=" Compatibility-logo">
          <img src={Logo} alt="" />
        </div>

        <div className={`Compatibility-menu ${menuOpen ? "open" : ""}`}>
          <div className=" Compatibility-Nav-item">
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
                <NavLink className="links" to="/Login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="profile">
            <img src={Profile} alt="" />
            <button>
              <NavLink to="/profile">Profile</NavLink>
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
      </div>
    </>
  );
}
