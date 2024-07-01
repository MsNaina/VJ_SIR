import React, { useState } from "react";
import Navbar from "../Mentorship/Navbar";
import Personalisation from "../assets/images/personalisation.png";
import { NavLink} from "react-router-dom";

const Payment = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Navbar />
      
      <div className="max-w-full my-8 border-4 border-gray-700 rounded-3xl shadow-lg bg-white flex overflow-hidden relative">
        {/* Green section on the left */}
        <div className="w-96 bg-green-100 relative">
          {/* Image floating above the bottom part with increased padding */}
          <img
            src={Personalisation}
            alt="Overlapping illustration"
            className="absolute bottom-13 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-4"
          />
        </div>

        <div className="flex-grow p-8">
          {/* About the Class Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="col-span-2">
              <h2 className="text-3xl font-bold mb-4">About the class</h2>
              <p className="mb-6 text-lg">
                <em>
                  "The Silver Plan is designed for students seeking personalized mentoring and structured guidance to excel in their JEE & NEET exams." It Will be Conducted By Vishal Joshi Sir.
                </em>
              </p>
              <h3 className="text-2xl font-semibold mb-2">- Highlights</h3>
              <ul className="list-disc list-inside mb-6">
                <li className="text-lg">- Personalised DPPs</li>
                <li className="text-lg">- Get Your Mentor Based On Compatibility</li>
                <li className="text-lg">- Monthly Parent-Teacher Meetings</li>
                <li className="text-lg">- Mock Tests</li>
                <li className="text-lg">- Weekly Meeting With Vishal Joshi Sir</li>
                <li className="text-lg">- Timetable Planning For Success</li>
                <li className="text-lg">- Test Paper Analysis</li>
                <li className="text-lg">- Interaction With JEE & NEET Toppers (Monthly)</li>
                <li className="text-lg">- Rapid Doubt Solutions</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-2">- Requirements</h3>
              <ul className="list-disc list-inside">
                <li className="text-lg">- Your Dedication & Commitment To Follow Us</li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              {/* Empty div for potential content */}
            </div>
          </div>
        </div>
      </div>

      {/* Direct to Payment Button */}
      <div className="flex justify-center">
        <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 mt-4">
        <NavLink className="links" to="/payment/direct" onClick={toggleMenu}>
        Direct to Payment
                </NavLink> 
        </button>
      </div>
    </>
  );
};

export default Payment;
