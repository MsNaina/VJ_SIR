import "./about.css"
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
 function AboutUs(){
    return (
      <>
        <section id="aboutus">
          <div className="aboutus">
            <div className="aboutus-navbar">
              <div className="aboutus-logo">
                <img src={Logo} alt="" />
              </div>

              <div className="aboutus-profile">
                <img src={Profile} alt="" />
                <button><Link to="/profile">Profile</Link></button>
              </div>

              <div className="aboutus-Nav-item">
                <ul>
                  <li>
                    <Link className="links" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Resource">
                      Resource
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Mentorship">
                      Mentorship
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/AboutUs">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link className="links" to="/Login">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>
      </>
    );
}
export default AboutUs