import "./Dpps.css"
import React ,{useState} from "react";
export default function DPP(){
    return (
      <>
        <section id="Dpp">
          <div className="Dpp" >
            <h1>Find the DPPs :</h1>

            <div className="searchInput container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input id="searchInput" type="text" placeholder="Search" />
            </div>

          </div>
        </section>
      </>
    );
}