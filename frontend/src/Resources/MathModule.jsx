import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";
import config from "../config";
const MathModules = () => {
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchChapters = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(
            `${config.BASE_URL}/api/questions/list-chapters/MA`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setModules(response.data);
        } catch (error) {
          console.error("There was an error fetching the modules!", error);
        }
      } else {
        console.log("Access token not found. Unable to fetch data.");
        // Handle case where access token is not available
      }
    };

    fetchChapters();
  }, []);
  const filteredModules = modules.filter((module) =>
    module.chapter_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section id="Modules">
        <h1>Find the Modules :</h1>
        <div className="SearchBar">
          <div className="searchbar">
            <div className="searchInput_container">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                id="searchInput"
                type="text"
                placeholder="Search"
                onChange={(event) => setSearchTerm(event.target.value)}
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
          {filteredModules.map((module) => (
            <div className="Modules-container" key={module.id}>
              <NavLink
                to={`/Modules/chapter/${module.id}/questions`}
                className="ModulesData"
              >
                <img
                  src={`${config.BASE_URL}${module.icon_id.icon_url}`}
                  alt=""
                />
                <div className="ModulesData-text">
                  <h3>{module.chapter_name}</h3>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MathModules;
