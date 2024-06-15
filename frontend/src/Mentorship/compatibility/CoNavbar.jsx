import { NavLink } from "react-router-dom";
import "./CoNavbar.css";
import Logo from "../../assets/images/logo.png";
import Profile from "../../assets/images/profile.png";
export default function CompatibilityNav() {
  return (
    <>
      <div className="CompatibilityNav">
        <div className=" Compatibility-logo">
          <img src={Logo} alt="" />
        </div>

        <div className="profile">
          <img src={Profile} alt="" />
          <button>
            <NavLink to="/profile">Profile</NavLink>
          </button>
        </div>

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
      </div>
    </>
  );
}
