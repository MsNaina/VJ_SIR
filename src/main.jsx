import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MentorshipPage from "./Mentorship/MentorshipPage.jsx"
import Login from './login/login.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "Mentorship",
    element: <MentorshipPage/>,
  },
  
  {
    path: "Logout",
    element: <Login/>,
  },
]);

const root =
ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
