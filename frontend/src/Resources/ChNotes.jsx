import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";

const ChNotes = () => {
  const [modules, setModules] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchChapters = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/questions/list-chapters/CH`,
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
  const handleModuleClick = async (chapterId) => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      console.error("No token found in local storage");
      alert("Please login again to continue.");
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/notes/subject/CH`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const chapterNotes = response.data.find(
        (note) => note.chapter === chapterId
      );

      if (chapterNotes) {
        window.open(`http://127.0.0.1:8000${chapterNotes.pdf_url}`, "_blank");
      } else {
        console.error(`No PDF URL found for this chapter ${chapterId}`);
      }
    } catch (error) {
      console.error("There was an error fetching the PDF URL!", error);
      alert("Error fetching the PDF URL. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <section id="Modules">
        <h1>Find the Notes :</h1>

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
              <NavLink to="/PhysicsNotes">Physics</NavLink>
            </button>
            <button className="Ch-btn search-btn">
              <NavLink to="/ChemistryNotes">Chemistry</NavLink>
            </button>
            <button className="Math-btn search-btn">
              <NavLink to="/MathNotes">Maths</NavLink>
            </button>
          </div>
        </div>

        <div className="Modules_Container">
          {filteredModules.map((module) => (
            <div className="Modules-container" key={module.id}>
              <div
                onClick={() => handleModuleClick(module.id)}
                className="ModulesData"
              >
                <img
                  src={`http://127.0.0.1:8000${module.icon_id.icon_url}`}
                  alt=""
                />
                <div className="ModulesData-text">
                  <h3>{module.chapter_name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ChNotes;
