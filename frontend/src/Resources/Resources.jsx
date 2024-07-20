import React, { useState } from "react";
import "./Resources.css";
import Navbar from "../Mentorship/Navbar";
import { useNavigate } from "react-router-dom";
import Mocktext from "../assets/images/mock-test.png";
import PYQs from "../assets/images/PYQs.png";
import Notes from "../assets/images/Notes.png";
import Modules from "../assets/images/Modules.png";
import Dpp from "../assets/images/Dpp3.png";
import { Helmet } from 'react-helmet-async';

export default function Resources() {
  const navigate = useNavigate();
  const [comingSoonMessage, setComingSoonMessage] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleResourceClick = (path) => {
    if (path === "/mocktest" || path === "/PhysicsDpp"|| path==="/Physicspyqs") {
      setComingSoonMessage("Coming Soon");
      setTimeout(() => {
        setComingSoonMessage("");
      }, 2000); 
      return;
    }

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
    <Helmet>
    <title>resource - vj nucleus</title>
  </Helmet>
      <Navbar />

      <section id="Resources" className="rounded-[30px]">
        <h1>Resources</h1>

        {comingSoonMessage && (
          <div className="coming-soon-message">{comingSoonMessage}</div>
        )}

        <div className="Resources">
          <div className="resource-card">
            <img src={Mocktext} alt="" />
            <div className="resource-card-bottom">
              <button onClick={() => handleResourceClick("/mocktest")}>
                Mock Test
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={PYQs} alt="" />
            <div className="resource-card-bottom">
              <button onClick={() => handleResourceClick("/Physicspyqs")}>
                PYQs
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Notes} alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0">
              <button onClick={() => handleResourceClick("/PhysicsNotes")}>
                Notes
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Modules} alt="" />
            <div className="resource-card-bottom absolute bottom-0  w-full h-20 left-0">
              <button onClick={() => handleResourceClick("/PhysicsModules")}>
                Modules
              </button>
            </div>
          </div>

          <div className="resource-card">
            <img src={Dpp} alt="" />
            <div className="resource-card-bottom">
              <button onClick={() => handleResourceClick("/PhysicsDpp")}>
                Dpp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
