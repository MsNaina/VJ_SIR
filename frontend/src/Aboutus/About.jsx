import "./about.css";
import { Helmet } from 'react-helmet-async';

import Navbar from "../Mentorship/Navbar";
function AboutUs() {
  return (
    <>
    <Helmet>
      <title>Aboutus - VJ Nucleus</title>
    </Helmet>
      <section id="aboutus">
        <div className="aboutus-navbar">
          <Navbar />
        </div>
      </section>
    </>
  );
}
export default AboutUs;
