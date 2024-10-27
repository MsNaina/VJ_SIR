import "./payment.css";
import Navbar from "../Mentorship/Navbar";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import MobileNo from "../login/mobileNo"; 
import { Helmet } from 'react-helmet-async';
import { useNavigate } from "react-router-dom"; 
import config from "../config";

export default function Payment() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [couponCode, setCouponCode] = useState(""); // State for coupon code input
  const [orderTotal, setOrderTotal] = useState(5000);
  const [couponMessage, setCouponMessage] = useState(""); // State for coupon response message
  const [showCouponMessage, setShowCouponMessage] = useState(false);
  const [isCouponApplied, setIsCouponApplied] = useState(false); // State to track if coupon is successfully applied
  const [verifiedMobileNumber, setVerifiedMobileNumber] = useState(""); // To pass mobile number
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token"); 
    if (!accessToken) {
      navigate("/login"); 
    }
  }, [navigate]);

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

  const handleApplyCoupon = async () => {
    try {
      const response = await fetch(`${config.BASE_URL}/api/payments/apply-coupon/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: orderTotal,
          coupon_code: couponCode,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setOrderTotal(data.order_total); 
        setCouponMessage(data.message); 
        setShowCouponMessage(true);
        setIsCouponApplied(true);
      } else {
        setCouponMessage(data.message);
        setShowCouponMessage(true);
        setIsCouponApplied(false); 
      }
    } catch (error) {
      console.error("Error applying coupon:", error);
      setCouponMessage("An error occurred while applying the coupon. Please try again.");
      setShowCouponMessage(true);
      setIsCouponApplied(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Payment - VJ Nucleus</title>
      </Helmet>
      <section id="Payment">
        <Navbar/>
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
                  <h3>₹5,000</h3>
                </div>  
              </div>

              <div className="coupon">
                <h2>REFERRAL CODE</h2>
                <div className="coupon-code">
                  <div className="coupon-code-left">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={isCouponApplied}
                    />
                  </div>
                  <div className="coupon-code-right">
                    <button onClick={handleApplyCoupon} disabled={isCouponApplied}>
                      {isCouponApplied ? "Coupon Applied" : "APPLY COUPON"}
                    </button>
                  </div>
                </div>
                {showCouponMessage && <p>"{couponMessage}"</p>}
              </div>

            </div>

            <div className="payment3">
              <h2>Order Total:</h2>
              <h3>₹{orderTotal || 5000}</h3>
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
                    Terms & Conditions
                  </HashLink>
                  and
                  <HashLink to="/privacypolicy"> Privacy Policy</HashLink>
                </h2>
              </div>
              <button onClick={handleStartClick}>NEXT</button>
            </div>
          </div>
        </div>
      </section>
      {isSidebarOpen && (
        <MobileNo 
          onClose={handleCloseSidebar} 
          orderTotal={orderTotal} // Pass total, can be discounted
          couponCode={couponCode} // Pass the entered coupon code (even if empty)
          isCouponApplied={isCouponApplied} // Pass whether coupon is valid
        />
      )}    </>
  );
};
