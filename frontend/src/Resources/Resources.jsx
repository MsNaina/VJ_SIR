import "./Resources.css";
import Navbar from "../Mentorship/Navbar";
import { Link } from "react-router-dom";

export default function Resources() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <Navbar />

      <section id="Resources" className="rounded-[30px] ">
        <h1>Resources</h1>

        <div className="Resources">
          <div className="resource-card">
            <img src="images\mock-test.png" alt="" />
            <div className="resource-card-bottom ">
              <button onClick={scrollToTop}>Mock Test</button>
            </div>
          </div>

          <div className="resource-card">
            <img src="images\PYQs.png" alt="" />
            <div className="resource-card-bottom">
              <button onClick={scrollToTop}>PYQs</button>
            </div>
          </div>

          <div className="resource-card">
            <img src="images\Notes.png" alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
              <button onClick={scrollToTop}>
                <Link to="/PhysicsNotes">Notes</Link>
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src="images\Modules.png" alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
              <button onClick={scrollToTop}>
                <Link to="/PhysicsModules">Modules</Link>
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src="images\Dpp3.png" alt="" />
            <div className="resource-card-bottom ">
              <button onClick={scrollToTop}>
                <Link to="/PhysicsDpp">Dpp</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
