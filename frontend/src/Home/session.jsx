import "./session.css";
import Sessionimg from "../assets/images/sneha.png";
export default function Session() {
  return (
    <>
      <section id="Session">
        <div className="session">
          <div className="session-left">
            <img src={Sessionimg} alt="" />
          </div>
          <div className="session-right">
            <div className="session-text">
              <h2>Book 1:1 Session</h2>
              <h3>Creative & Professional Digital Mentors!</h3>
              <p>
                Students feel at ease during personalized 1-1 mentor sessions
                for a demo. They value the tailored guidance that meets their
                unique needs and questions. This individualized attention boosts
                their confidence and understanding. It creates a safe space for
                open communication and feedback. Overall, these sessions are
                more engaging and effective for achieving their learning goals.
              </p>
            </div>

            <div className="session-bottom">
              <button className="session-btn">BUY NOW</button>
              <a href=""> Know More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
