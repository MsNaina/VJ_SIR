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
