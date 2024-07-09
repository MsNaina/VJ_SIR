import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";
import config from "../config";
const ChPYQs = () => {
  const [chapter, setchapter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchChapters = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(
            `${config.BASE_URL}/questions/list-chapters/CH`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setchapter(response.data);
        } catch (error) {
          console.error("There was an error fetching the PYQs!", error);
        }
      } else {
        console.log("Access token not found. Unable to fetch data.");
        // Handle case where access token is not available
      }
    };

    fetchChapters();
  }, []);

  const filterChapter = chapter.filter((chapter) =>
    chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section id="Modules">
        <h1>Find the PYQs :</h1>
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
              <NavLink to="/Physicspyqs">Physics</NavLink>
            </button>
            <button className="Ch-btn search-btn">
              <NavLink to="/Chemistrypyqs">Chemistry</NavLink>
            </button>
            <button className="Math-btn search-btn">
              <NavLink to="/Mathpyqs">Math</NavLink>
            </button>
          </div>
        </div>

        <div className="Modules_Container">
          {filterChapter.map((chapter) => (
            <div className="Modules-container" key={chapter.id}>
              <NavLink
                to={`/pyq/chapter/${chapter.id}`}
                className="ModulesData"
              >
                <img
                  src={`${config.BASE_URL}${chapter.icon_id.icon_url}`}
                  alt=""
                />
                <div className="ModulesData-text">
                  <h3>{chapter.chapter_name}</h3>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChPYQs;
