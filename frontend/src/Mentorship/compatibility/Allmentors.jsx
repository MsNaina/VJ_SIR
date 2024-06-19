import React from "react";
import { useLocation } from "react-router-dom";

export default function AllMentor() {
  const location = useLocation();
  const { responseMessage, allocatedMentor } = location.state;

  return (
    <>
      <div>
        <h2>Mentor Allocation Result</h2>
        {responseMessage && <p>{responseMessage}</p>}
        {allocatedMentor && <p>Your allocated mentor is: {allocatedMentor}</p>}
      </div>
    </>
  );
}
