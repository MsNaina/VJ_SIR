import "./payment.css";
import Navbar from "../Mentorship/Navbar";
import { HashLink } from "react-router-hash-link";
import React, { useState } from "react";
import MobileNo from "../login/mobileNo"; // Importing the MobileNo component

export default function Pay() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleStartClick = (e) => {
    e.preventDefault();
    if (isChecked) {
      setIsSidebarOpen(true);
    } else {
      alert("Please accept the Terms & Conditions and Privacy Policy.");
    }
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <section id="Payment">
        <Navbar />
        <div className="payment">
          <div className="payment-left"></div>
          <div className="payment-right">
            <div className="payment1">
              <p>
                Choose the <span> PAY NOW</span> option to continue with
                checkout. You will still have a chance to review and edit your
                order before it is finalized.
              </p>
            </div>

            <div className="Payment2">
              <h1>Order Summary</h1>

              <div className="payment211">
                <div className="payment21">
                  <h2>Item Name</h2>
                  <h3>Mentorship Session'25</h3>
                </div>

                <div className="payment22">
                  <h2>Price</h2>
                  <h3>₹500</h3>
                </div>
              </div>
            </div>
            <div className="payment3">
              <h2>Order Total</h2>
              <h3>₹500</h3>
            </div>

            <div className="payment-btn">
              <div className="terms-container">
                <div className="terms-checkbox">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
                <h2>
                  I agree to the
                  <HashLink to="/Terms&condition">
                    {" "}
                    Terms & Conditions
                  </HashLink>{" "}
                  and
                  <HashLink to="/privacypolicy"> Privacy Policy</HashLink>
                </h2>
              </div>
              <button onClick={handleStartClick}>NEXT</button>
            </div>
          </div>
        </div>
      </section>
      {isSidebarOpen && <MobileNo onClose={handleCloseSidebar} />}
    </>
  );
}
