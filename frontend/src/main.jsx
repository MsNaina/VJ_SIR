import React from "react";
import ReactDOM from "react-dom/client";
import MentorshipPage from "./Mentorship/MentorshipPage.jsx";
import Login from "./login/login.jsx";
import "./index.css";
import Home from "./Home/Home.jsx";
import AboutUs from "./Aboutus/About.jsx";
import Resources from "./Resources/Resources.jsx";
import DPP from "./Resources/Dpps.jsx";
import Notes from "./Resources/Notes.jsx";
import Modules from "./Resources/Modules.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./login/signup.jsx";

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
    path: "Dpp",
    element: <DPP />,
  },
  {
    path: "Notes",
    element: <Notes />,
  },
  {
    path: "Modules",
    element: <Modules />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
