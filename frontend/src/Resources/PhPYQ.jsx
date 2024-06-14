import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";

const PhPYQs = () => {
  const [chapter, setchapter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8000/questions/list-chapters/PH`)
      .then((response) => {
        setchapter(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the modules!", error);
      });
  }, []);

  const filterChapter = chapter.filter((chapter) =>
    chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section id="Modules">
        <div className="Modules">
          <div className="SearchBar">
            <div className="searchbar">
              <h1>Find the PYQs :</h1>
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
                    src={`http://127.0.0.1:8000${chapter.icon_id.icon_url}`}
                    alt=""
                  />
                  <div className="ModulesData-text">
                    <h3>{chapter.chapter_name}</h3>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PhPYQs;
