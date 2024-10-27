import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./level.css";

const Level = () => {
  const { chapterId } = useParams();
console.log("Captured chapterId:", chapterId);
  return (
    <>
      <Navbar />
      <section id="level-select">

        <div className="level-heading">
            <h1>PYQs</h1>
        </div>

        <div className="level-select">
          <div className="level-container">
            <div className="level">
              <div className="level-Line"></div>
              <h3>JEE MAIN</h3>
            </div>
            <div className="level-button">
              <p></p>
            <NavLink to={`/${chapterId}/mains/questions`}>
              <button >Attempt  &gt;&gt;</button>
            </NavLink>
            </div>
          </div>

          <div className="level-container">
            <div className="level">
              <div className="level-Line"></div>
              <h3>JEE ADVANCED</h3>
            </div>
            <div className="level-button">
              <p></p>
            <NavLink to={`/${chapterId}/advanced/questions`}>
              <button >Attempt &gt;&gt;</button>
            </NavLink>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Level;
