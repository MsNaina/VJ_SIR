import React from "react";
import Header from "./Header";
import Mentorship from "./Mentorship batch";
import PODJEE from "./PODJEE";
import Books from "./Books";
import Session from "./session";
import FAQ from "./FAQ";
import Contact from "./contact";
import WaveFooter from "./Wavefooter";
import Footer from "./footer";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <>
      <Header />
      <Mentorship />
      <PODJEE />
      <Books />
      <Session />
      <Testimonial />
      <FAQ />
      <Contact />
      <WaveFooter />
      <Footer />
    </>
  );
}

export default Home;
