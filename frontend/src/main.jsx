import React from "react";
import ReactDOM from "react-dom/client";
import MentorshipPage from "./Mentorship/MentorshipPage.jsx";
import Login from "./login/login.jsx";
import "./index.css";
import Home from "./Home/Home.jsx";

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
    path: "Login",
    element: <Login />,
  },
  {
    path: "Signup",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
