import React from "react";
import Header from "./Header";
import Mentorship from "./Mentorship batch";
import PODJEE from "./PODJEE";
import Books from "./Books";
import  Session from "./session"
import FAQ from "./FAQ";
import Contact from "./contact";
import WaveFooter from "./Wavefooter";
import Footer from "./footer";
import Testimonial from "./Testimonial";
import TestimonialCard from "./TestimonialCard";
// import Typewriter from './typewriter';

function Home() {
  return (
    <>
      <Header />
      <Mentorship />
      <PODJEE />
      <Books />
      <Session />
      <Testimonial />
      {/* <TestimonialCard/> */}
      <FAQ />
      <Contact />
      <WaveFooter />
      <Footer />
      
      {/* <Typewriter/> */}
    </>
  );
}

export default Home;
