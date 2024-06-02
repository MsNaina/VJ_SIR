import "./profile.css"
import { NavLink } from "react-router-dom";
export default function Profile(){
    return (
      <>
        <section id="Profile">
          <div className="profile-navbar">
            <div className="profile-logo profile-left">
              <img src="images\logo.png" alt="" />
            </div>

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
                  <NavLink className="links" to="/Login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="Profile">
            <div className="profile-left">
              
            </div>
          </div>
        </section>
      </>
    );
}
