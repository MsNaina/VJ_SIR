import { NavLink } from "react-router-dom";
import "./CoNavbar.css"
export default function CompatibilityNav() {
  return (
    <>
      <div className="CompatibilityNav">
        <div className=" Compatibility-logo">
          <img src="\images\logo.png" alt="" />
        </div>

        <div className="profile">
          <img src="\images\profile.png" alt="" />
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
