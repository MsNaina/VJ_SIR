import "./passionate.css";
import { NavLink } from "react-router-dom";
import { useState , useEffect } from "react";
// import Vrutika from "../assets/images/vrutika.png";

import Go from "../assets/images/Go.png";
export default function Passionate() {
  const [mentor, setMentor] = useState(null);
  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axios.get(
          "{{domainname}}:{{PORT}}/mentorship/random-mentor"
        );
        setMentor(response.data);
      } catch (error) {
        console.error("Error fetching mentor:", error);
      }
    };

    fetchMentor();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <>
      <section id="Passionate">
        <div className=" passionate-heading">
          <h1>
            Passionate <span>Mentors</span>
          </h1>
          <h2>Dedicated To Help You</h2>

          <div className="passionate-pera">
            <div className="passionate-line"></div>
            <p>
              “A mentor is like a sturdy trellis, guiding and supporting a young
              vine as it reaches towards the sun, helping it climb higher and
              blossom into its full potential.”
            </p>
          </div>
        </div>

        <div className="mentorship-footer">
          <h1>
            Connect <br /> and <br />
            Grow.
          </h1>
        </div>
        <div className="mentorship-footerimg">
          <button onClick={scrollToTop} className="go">
            <NavLink to="./Compatibility">
              <img src={Go} alt="" />
            </NavLink>
          </button>
          {mentor ? (
            <div>
              <img className="profile" src={mentor.profile} alt={mentor.name} />
              <p>{mentor.name}</p>
              <p>{mentor.iit}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}
