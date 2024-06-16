import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <section id="Navbar">
        <div className="Navbar">
          <div className="logo">
            <img src="images\logo.png" alt="" />
          </div>

          <div className="profile">
            <div className="profile-img">
             <button> <img src="images\profile.png" alt="" /></button> 
            </div>
            <div>Profile</div>
          </div>

          <div className="Nav-items">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">Mentorship</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}