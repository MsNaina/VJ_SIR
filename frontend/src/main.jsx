import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import SignUp from "./login/signup.jsx";
import PhDPP from "./Resources/PhDpp.jsx";
import MathDPP from "./Resources/MathDpp.jsx";
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
import OTP from "./login/Otp.jsx";
import Class from "./login/class.jsx";
import SnehaTestimonial from "./Home/snehaTestimonial.jsx";
import Mocktest from "./Resources/Mocktest.jsx";
import Privacy from "./Home/privacy.jsx";
import Mentor from "./Mentorship/compatibility/mentor.jsx";
import Highlight from "./payment/highlight.jsx";
import Payment from "./payment/payment.jsx";
import PAYMENT from "./payment/snehaPayment.jsx";
import MobileNo from "./login/mobileNo.jsx";
import Email from "./login/Email.jsx";
import Terms from "./Home/Terms.jsx";
import Refund from "./Home/Refund.jsx";
import ResetPassword from "./login/resetpassword.jsx";
import MentorProfile from "./Mentorship/compatibility/MentorsProfile.jsx";
import TestList from "./Resources/testlist.jsx"
import Test from "./Resources/Test.jsx"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="email" element={<Email />} />
        <Route path="MentorProfile" element={<MentorProfile />} />
        <Route path="Terms&condition" element={<Terms />} />
        <Route path="RefundPolicy" element={<Refund />} />
        <Route path="verifynumber" element={<MobileNo />} />
        <Route path="privacypolicy" element={<Privacy />} />
        <Route path="highlights" element={<Highlight />} />
        <Route path="payment" element={<Payment />} />
        <Route path="Pay" element={<PAYMENT />} />
        <Route path="mentorship" element={<MentorshipPage />} />
        <Route path="session" element={<SnehaTestimonial />} />
        <Route path="Aboutus" element={<AboutUs />} />
        <Route path="Resource" element={<Resources />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/class" element={<Class />} />
        <Route path="ChemistryDpp" element={<ChDPP />} />
        <Route path="MathDpp" element={<MathDPP />} />
        <Route path="PhysicsDpp" element={<PhDPP />} />
        <Route path="PhysicsNotes" element={<PhNotes />} />
        <Route path="ChemistryNotes" element={<ChNotes />} />
        <Route path="MathNotes" element={<MathNotes />} />
        <Route path="PhysicsModules" element={<PhModules />} />
        <Route path="ChemistryModules" element={<ChModules />} />
        <Route path="MathModules" element={<MathModules />} />
        <Route path="/Modules/chapter/:id/questions" element={<AllChapterQues />} />
        <Route path="/question/:id" element={<PhQues />} />
        <Route path="Physicspyqs" element={<PhPYQs />} />
        <Route path="Chemistrypyqs" element={<ChPYQs />} />
        <Route path="Mathpyqs" element={<MathPYQs />} />
        <Route path="mocktest" element={<Mocktest />} />
        <Route path="/pyq/chapter/:chapterId" element={<Level />} />
        <Route path="/:chapterId/:level/questions" element={<AllPYQs />} />
        <Route path="/pyq/question/:id" element={<MainsAdvancedQues />} />
        <Route path="profile" element={<Profile />} />
        <Route path="Mentorship/Compatibility" element={<Compatibility />} />
        <Route path="Mentorship/Compatibility/allocated-mentor" element={<AllMentor />} />
        <Route path="/api/user/reset-password/:uid/:token/" element={<ResetPassword />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/testlist" element={<TestList />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </HelmetProvider>
);
