import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";
import config from "../config";
const MathNotes = () => {
  const [chapters, setChapters] = useState([]);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [comingSoonChapter, setComingSoonChapter] = useState(null);

  useEffect(() => {
    const fetchChaptersAndNotes = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        try {
          const chapterResponse = await axios.get(
            `${config.BASE_URL}/questions/list-chapters/MA`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const notesResponse = await axios.get(
            `${config.BASE_URL}/notes/subject/MA`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          setChapters(chapterResponse.data);
          setNotes(notesResponse.data);
        } catch (error) {
          console.error(
            "There was an error fetching the chapters and notes!",
            error
          );
        }
      } else {
        console.log("Access token not found. Unable to fetch data.");
      }
    };

    fetchChaptersAndNotes();
  }, []);

  const filteredChapters = chapters.filter((chapter) =>
    chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModuleClick = (chapterId) => {
    const chapterNotes = notes.find((note) => note.chapter.id === chapterId);
    if (chapterNotes && chapterNotes.pdf_url) {
      window.open(`${config.BASE_URL}${chapterNotes.pdf_url}`, "_blank");
    } else {
      setComingSoonChapter(chapterId);
      setTimeout(() => {
        setComingSoonChapter(null);
      }, 1000);
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
          {filteredChapters.map((chapter) => (
            <div className="Modules-container" key={chapter.id}>
              {comingSoonChapter === chapter.id && (
                <div className="coming-soon-message">Coming soon!</div>
              )}
              <div
                onClick={() => handleModuleClick(chapter.id)}
                className="ModulesData"
              >
                <img
                  src={`${config.BASE_URL}${chapter.icon_id.icon_url}`}
                  alt=""
                />
                <div className="ModulesData-text">
                  <h3>{chapter.chapter_name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MathNotes;
