import "./Resources.css";
import Navbar from "../Mentorship/Navbar";
import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <>
      <Navbar />

      <section id="Resources" className="rounded-[30px] ">
        <h1>Resources</h1>

        <div className="Resources">
          <div className="card123">
            <div className="resource-card">
              <img src="images\mock-test.png" alt="" />
              <div className="resource-card-bottom ">
                <button>Mock Test</button>
              </div>
            </div>

            <div className="resource-card">
              <img src="images\PYQs.png" alt="" />
              <div className="resource-card-bottom">
                <button>PYQs</button>
              </div>
            </div>

            <div className="resource-card">
              <img src="images\Notes.png" alt="" />
              <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
               <button> <Link to="/Notes">Notes</Link></button>
              </div>
            </div>
          </div>

          <div className="card45">
            <div className="resource-card">
              <img src="images\Modules.png" alt="" />
              <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0 ">
                 <button> <Link to="/Modules">Modules</Link></button>
              </div>
            </div>

            <div className="resource-card">
              <img src="images\mock-test.png" alt="" />
              <div className="resource-card-bottom ">
                <button> <Link to="/Dpp">Dpp</Link></button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
