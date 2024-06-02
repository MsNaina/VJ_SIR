 import "./PhNotes.css";
 import data from "./Mathdata.json";
 import Navbar from "../Mentorship/Navbar";
 import React, { useState } from "react";
 import { NavLink } from "react-router-dom";

 export default function MathNotes() {
   const [searchTerm, setSearchTerm] = useState("");
   return (
     <>
       <Navbar />

       <section id="Notes">
         <div className="Note">
           <div className="SearchBar">
             <div className="searchbar">
               <h1>Find the Notes :</h1>

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
                 <NavLink to="/PhysicsNotes">Physics</NavLink>
               </button>
               <button className="Ch-btn search-btn">
                 <NavLink to="/ChemistryNotes">Chemistry</NavLink>
               </button>
               <button className="Math-btn search-btn">
                 <NavLink to="/MathNotes">Math</NavLink>
               </button>
             </div>
           </div>
           <div className="Note_Container">
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
                     <div className="Notes-container">
                       <div className="NotesData" key={val.id}>
                         <img src={val.image} alt="" />
                         <div className="NotesData-text">
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
