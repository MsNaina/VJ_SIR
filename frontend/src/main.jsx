import React from "react";
import ReactDOM from "react-dom/client";
import MentorshipPage from "./Mentorship/MentorshipPage.jsx";
import Login from "./login/login.jsx";
import "./index.css";
import Home from "./Home/Home.jsx";
import AboutUs from "./Aboutus/About.jsx";
import Resources from "./Resources/Resources.jsx";
import ChDPP from "./Resources/ChDpp.jsx";
import PhNotes from "./Resources/PhNotes.jsx";
import PhModules from "./Resources/PhModules.jsx";
import Profile from "./profilepage/profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./login/signup.jsx";
import PhDPP from "./Resources/PhDpp.jsx"
import MathDPP from "./Resources/MathDpp.jsx"
import ChModules from "./Resources/ChModules.jsx";
import MathModules from "./Resources/MathModule.jsx";
import ChNotes from "./Resources/ChNotes.jsx";
import MathNotes from "./Resources/MathNotes.jsx";
import TopicsPage from "./Resources/Phtopics.jsx";
import data from "./Resources/Physicsdata.json";
import Chdata from "./Resources/chemistrydata.json"
import ChTopicsPage from "./Resources/ChTopics.jsx";
import MathTopicsPage from "./Resources/MathTopics.jsx";
import Mathdata from "./Resources/Mathdata.json"
import PhQues from "./Resources/PhQuePage.jsx";
import CompatibilityStage1 from "./compatibility/compatibilitystage1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "Mentorship",
    element: <MentorshipPage />,
  },
  {
    path: "Aboutus",
    element: <AboutUs />,
  },
  {
    path: "Resource",
    element: <Resources />,
  },

  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <SignUp />,
  },
  {
    path: "ChemistryDpp",
    element: <ChDPP />,
  },
  {
    path: "MathDpp",
    element: <MathDPP />,
  },
  {
    path: "PhysicsDpp",
    element: <PhDPP />,
  },
  {
    path: "PhysicsNotes",
    element: <PhNotes />,
  },
  {
    path: "ChemistryNotes",
    element: <ChNotes />,
  },
  {
    path: "MathNotes",
    element: <MathNotes />,
  },
  {
    path: "PhysicsModules",
    element: <PhModules />,
  },
  {
    path: "ChemistryModules",
    element: <ChModules />,
  },
  {
    path: "MathModules",
    element: <MathModules />,
  },
  {
    path: "/topics/:id",
    element: <TopicsPage data={data} />,
  },
  {
    path: "Chemistry/topics/:id",
    element: <ChTopicsPage data={Chdata} />,
  },
  {
    path: "Maths/topics/:id",
    element: <MathTopicsPage data={Mathdata} />,
  },
  {
    path: "/quiz/:id",
    element: <PhQues />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "Compatibility",
    element: <CompatibilityStage1 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
