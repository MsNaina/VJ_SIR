import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./level.css";
import { Helmet } from 'react-helmet-async';

const TestList = () => {
  const { chapterId } = useParams();
console.log("Captured chapterId:", chapterId);
  return (
    <>
    <Helmet>
    <title>Mock Test - VJ Nucleus</title>
  </Helmet>
      <Navbar />
      <section id="level-select">

        <div className="level-heading">
            <h1>Mock Test</h1>
        </div>

        <div className="level-select">
          <div className="level-container">
            <div className="level">
              <div className="level-Line"></div>
              <h3>Mock Test 1</h3>
            </div>
            <NavLink to={'/mocktest'}>
              <button className="level-button">Attempt</button>
            </NavLink>
          </div>

          <div className="level-container">
            <div className="level">
              <div className="level-Line"></div>
              <h3>Mock Test 2</h3>
            </div>
            <NavLink to={'/mocktest'}>
              <button className="level-button">Attempt</button>
            </NavLink>
          </div>
        </div>

      </section>
    </>
  );
};

export default TestList;
