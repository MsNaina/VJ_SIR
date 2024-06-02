import "./ChDpp.css";
import Navbar from "../Mentorship/Navbar";
import React, { useState } from "react";
import data from "./chemistrydata.json";
import { Link } from "react-router-dom";

export default function ChDPP() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar />

      <section id="DPPs">
        <div className="Dpp">
          <div className="SearchBar">
            <div className="searchbar">
              <h1>Find the DPPs :</h1>

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
                {" "}
                <Link to="/PhysicsDpp">Physics</Link>
              </button>
              <button className="Ch-btn search-btn">
                <Link to="/ChemistryDpp">Chemistry</Link>
              </button>
              <button className="Math-btn search-btn">Math</button>
            </div>
          </div>
          <div className="Dpp_Container">
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
                    <div className="DppData-container">
                      <div className="DppData" key={val.id}>
                        <img src={val.image} alt="" />
                        <div className="DppData-text">
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
