import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Mentorship/Navbar";
import "./PhModules.css";
import config from "../config";

const MathNotes = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [comingSoonChapter, setComingSoonChapter] = useState(null);

  useEffect(() => {
    const fetchChaptersAndNotes = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        try {
          const notesResponse = await fetch(
            `${config.BASE_URL}/api/notes/subject/MA`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          if (notesResponse.ok) {
            const responseData = await notesResponse.json();
            console.log("Response Data:", responseData);
            setNotes(responseData); // Set notes data directly from the response
          }
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

  const filteredChapters = notes.filter((note) =>
    note.chapter.chapter_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModuleClick = (chapterId, pdf_url) => {
    const chapterNotes = notes.find((note) => note.chapter.id === chapterId);
    if (chapterNotes && pdf_url) {
      window.open(`${chapterNotes.pdf_url}`, "_blank");//*
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
          {filteredChapters.map((note) => (
            <div className="Modules-container" key={note.chapter.id}>
              {comingSoonChapter === note.chapter.id && (
                <div className="coming-soon-message">Coming soon!</div>
              )}
              <div
                onClick={() => handleModuleClick(note.chapter.id, note.pdf_url)}
                className="ModulesData"
              >
                <img
                  src={`${note.chapter.icon_id.icon_url}`} //*
                  alt=""
                />
                <div className="ModulesData-text">
                  <h3>{note.chapter.chapter_name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default MathNotes