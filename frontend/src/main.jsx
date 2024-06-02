import React from "react";
import ReactDOM from "react-dom/client";
import MentorshipPage from "./Mentorship/MentorshipPage.jsx";
import Login from "./login/login.jsx";
import "./index.css";
import Home from "./Home/Home.jsx";
import AboutUs from "./Aboutus/About.jsx";
import Resources from "./Resources/Resources.jsx";
import ChDPP from "./Resources/ChDpp.jsx";
import Notes from "./Resources/Notes.jsx";
import Modules from "./Resources/Modules.jsx";
import Profile from "./profilepage/profile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./login/signup.jsx";
import PhDPP from "./Resources/PhDpp.jsx"

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
    path: "PhysicsDpp",
    element: <PhDPP />,
  },
  {
    path: "Notes",
    element: <Notes />,
  },
  {
    path: "Modules",
    element: <Modules />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
