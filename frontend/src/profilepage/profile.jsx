import "./profile.css";
import { NavLink } from "react-router-dom";
export default function Profile() {
  return (
    <>
      <section id="Profile">
        <div className="profile-top">
          <div className="profile-logo">
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

        <div className="profile-bottom">
          <div className="profile-left">
            <img className="profile-img" src="/images/profile1.png" alt="" />
          </div>

          <div className="profile-right">
            <h2>Profile</h2>

            <div className="profile-info">
              <img src="/images\profile-info.png" alt="" />
              <h3>Name</h3>
            </div>

            <div>
              <h2>Personal Information</h2>
              <div className="personal-info">
                <div>
                  <label htmlFor="">Mobile No.</label>
                  <input id="profile-input" type="tel"/>
                </div>
                <div>
                  <label htmlFor="">Email ID</label>
                  <input id="profile-input" type="email" />
                </div>
               
                <div>
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
