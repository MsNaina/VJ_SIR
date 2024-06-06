import "./PhModules.css";
import Mathdata from "./Mathdata.json";
import Navbar from "../Mentorship/Navbar";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function MathModules() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChapterClick = (id) => {
    navigate(`/Maths/topics/${id}`);
  };

  const filteredData = Mathdata.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (val.chapter.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
    return null;
  });

  return (
    <>
      <Navbar />

      <section id="Modules">
        <div className="Modules">
          <div className="SearchBar">
            <div className="searchbar">
              <h1>Find the Modules :</h1>

              <div className="searchInput_container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  id="searchInput"
                  type="text"
                  placeholder="Search"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="search-btns">
              <button className="Ph-btn search-btn">
                <NavLink to="/PhysicsModules">Physics</NavLink>
              </button>
              <button className="Ch-btn search-btn">
                <NavLink to="/ChemistryModules">Chemistry</NavLink>
              </button>
              <button className="Math-btn search-btn">
                <NavLink to="/MathModules">Math</NavLink>
              </button>
            </div>
          </div>

          <div className="Modules_Container">
            {filteredData.map((val) => (
              <div className="Modules-container" key={val.id}>
                <div
                  className="ModulesData"
                  onClick={() => handleChapterClick(val.id)}
                >
                  <img src={val.image} alt="" />
                  <div className="ModulesData-text">
                    <h6>{val.date}</h6>
                    <h3>{val.chapter}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
