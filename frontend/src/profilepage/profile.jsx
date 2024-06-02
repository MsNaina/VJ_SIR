import "./profile.css"
import Navbar from "../Mentorship/Navbar"
export default function Profile(){
    return (
      <>
        <Navbar />

        <section id="Profile">
          <div className="profile-left">

            <div className="profile-img">
              <img src="/sneha.jpeg" alt="" />
            </div>
            <div className="edit-text">
              <div className="edit-info">
                <h2>Sneha Verma</h2>
                <h3>class 11th</h3>
              </div>

              <div className="edit">
                <img src="/images/edit.png" alt="" />
                <button>Edit</button>
              </div>
            </div>
          </div>

          <div className="profile-right">
            <h1>My Profile</h1>

            <div className="profile-info">
              <div className="Name">
                <div>
                  <label htmlFor="">First Name</label>
                  <input type="text" id="profile-input" />
                </div>
                <div>
                  <label htmlFor="">Last Name</label>
                  <input type="text" id="profile-input" />
                </div>
              </div>
              <div className="class">
                <div>
                  <label htmlFor="">Class</label>
                  <input type="text" id="profile-input" />
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input type="tel" id="profile-input" />
                </div>
              </div>
              <label htmlFor="">Email</label>
              <input type="email" id="profile-input" />

              <label htmlFor="">Address</label>
              <input type="text" id="profile-input" />
            </div>
          </div>
        </section>
      </>
    );
}
