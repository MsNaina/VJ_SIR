import "./PhModules.css";
import data from "./Physicsdata.json";
import Navbar from "../Mentorship/Navbar";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function PhModules() {
  const [searchTerm, setSearchTerm] = useState("");
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
            {data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.chapter.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <>
                    <div className="Modules-container">
                      <div className="ModulesData" key={val.id}>
                        <img src={val.image} alt="" />
                        <div className="ModulesData-text">
                          <h6>{val.date}</h6>
                          <h3>{val.chapter}</h3>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
