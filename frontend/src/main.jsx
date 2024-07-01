import React from "react";
import ReactDOM from "react-dom/client";
import MentorshipPage from "./Mentorship/MentorshipPage.jsx";
import Login from "./login/login.jsx";
import "./index.css";
import Payment from "./Payment/payment.jsx";
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
import Compatibility from "./Mentorship/compatibility/compatibility.jsx";
import PhQues from "./Resources/PhQuePage.jsx";
import PhPYQs from "./Resources/PhPYQ.jsx";
import ChPYQs from "./Resources/ChPYQ.jsx";
import MathPYQs from "./Resources/MathPYQ.jsx";
import AllChapterQues from "./Resources/AllChapterQues.jsx";
import Level from "./Resources/Level.jsx";
import AllPYQs from "./Resources/AllPYQs.jsx";
import MainsAdvancedQues from "./Resources/Pyq.jsx";
import AllMentor from "./Mentorship/compatibility/Allmentors.jsx";
import OTP from "./login/Otp.jsx"
import SnehaTestimonial from "./Home/snehaTestimonial.jsx";
import Mocktest from "./Resources/Mocktest.jsx"
import Mocktestquestion from "./Resources/Mockques.jsx"
import Privacy from "./Home/privacy.jsx"
import PaymentDirect from "./Payment/paymentDirect/paymentDirect.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "privacypolicy",
    element: <Privacy />,
  },
  {
    path: "payment",
    element: <Payment />,
  },
  {
    path:"payment/direct",
    element: <PaymentDirect />
  },

  {
    path: "Mentorship",
    element: <MentorshipPage />,
  },
  {
    path: "session",
    element: <SnehaTestimonial />,
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
    path: "/otp",
    element: <OTP />,
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
    path: "/Modules/chapter/:id/questions",
    element: <AllChapterQues />,
  },
  {
    path: "/question/:id",
    element: <PhQues />,
  },
  {
    path: "Physicspyqs",
    element: <PhPYQs />,
  },
  {
    path: "Chemistrypyqs",
    element: <ChPYQs />,
  },
  {
    path: "Mathpyqs",
    element: <MathPYQs />,
  },
  {
    path: "mocktest",
    element: <Mocktest />,
  },
  {
    path: "Mocktestques",
    element: <Mocktestquestion />,
  },
  {
    path: "/pyq/chapter/:chapterId",
    element: <Level />,
  },
  {
    path: "/:chapterId/:level/questions",
    element: <AllPYQs />,
  },
  {
    path: "/pyq/question/:id",
    element: <MainsAdvancedQues />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "Mentorship/Compatibility",
    element: (
      // <ProtectedRoute>
      <Compatibility />
      // </ProtectedRoute>
    ),
  },
  {
    path: "Mentorship/Compatibility/allocated-mentor",
    element: <AllMentor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
