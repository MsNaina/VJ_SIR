import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar"

export default function AllMentor() {
  const location = useLocation();
  const { responseMessage, allocatedMentor } = location.state;

  return (
    <>
     <section id="mentors" >
      <Navbar/>
     </section>
    </>
  );
}
