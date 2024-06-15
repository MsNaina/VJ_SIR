import "./Resources.css";
import Navbar from "../Mentorship/Navbar";
import { Link } from "react-router-dom";
import Mocktext from "../assets/images/mock-test.png";
import PYQs from "../assets/images/PYQs.png";
import Notes from "../assets/images/Notes.png";
import Modules from "../assets/images/Modules.png";
import Dpp from "../assets/images/Dpp3.png";

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
            <img src={Mocktext} alt="" />
            <div className="resource-card-bottom ">
              <button onClick={scrollToTop}>Mock Test</button>
            </div>
          </div>

          <div className="resource-card">
            <img src={PYQs} alt="" />
            <div className="resource-card-bottom">
              <button onClick={scrollToTop}>
                <Link to="/Physicspyqs">PYQs</Link>
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Notes} alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
              <button onClick={scrollToTop}>
                <Link to="/PhysicsNotes">Notes</Link>
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Modules} alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
              <button onClick={scrollToTop}>
                <Link to="/PhysicsModules">Modules</Link>
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Dpp} alt="" />
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
