import "./mobileNo.css";
import Mobile from "../assets/images/Mobilenumber.png";
import React, { useState } from "react";
import axios from "axios";
import config from "../config";

export default function MobileNo({ onClose, orderTotal, couponCode, isCouponApplied }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState("");
  const accessToken = localStorage.getItem("access_token");

  const handleRequestOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${config.BASE_URL}/api/user/mobile-otp/`,
        { mobile_no: mobileNumber },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setOtpRequested(true);
      }
    } catch (error) {
      alert("Failed to request OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setOtpLoading(true);
    try {
      const response = await axios.post(
        `${config.BASE_URL}/api/user/mobile-verify-otp/`,
        { otp, params: { mobile_no: mobileNumber } },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setVerificationMessage("Your mobile number is verified.");

        const createOrderData = {
          amount: isCouponApplied ? orderTotal : 5000, // Use orderTotal if coupon applied, else default to 5000
          return_url: `${config.BASE_URL}/api/payments/create-order/`,
          coupon_code: isCouponApplied ? couponCode : null // Pass coupon code if valid, else null
        };

        const createOrderResponse = await axios.post(
          `${config.BASE_URL}/api/payments/create-order/`,
          createOrderData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (createOrderResponse.status === 200) {
          const paymentSessionId = createOrderResponse.data.session_id;

          // Proceed to payment
          setTimeout(() => {
            setVerificationMessage("");
            setOtp("");
            setMobileNumber("");
            setOtpRequested(false);

            // Initiate Cashfree checkout
            const cashfree = Cashfree({
              mode: "sandbox", // or "production" in production environment
            });
            let checkoutOptions = {
              paymentSessionId: paymentSessionId,
              redirectTarget: "_self",
            };
            cashfree.checkout(checkoutOptions);
          }, 1000);
        } else {
          alert("Failed to get payment session ID. Please try again.");
        }
      }
    } catch (error) {
      alert("Failed to verify OTP. Please try again." + error);
    } finally {
      setOtpLoading(false);
    }
  };

  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <div className="mobileno">
        <div className="Mobileno-left">
          <img src={Mobile} alt="" />
        </div>
        <div className="Mobileno-right">
          <h2>Verify your Mobile No.</h2>
          <input
            id="Mobilenumber"
            type="text"
            required
            placeholder="Enter Your Mobile No."
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            disabled={otpRequested}
          />
          {!otpRequested ? (
            <div className="mobileotprequest">
              <button onClick={handleRequestOtp} disabled={loading}>
                {loading ? "Requesting..." : "Request OTP"}
              </button>
            </div>
          ) : (
            <div className="otp-verification">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                required
              />
              <button onClick={handleVerifyOtp} disabled={otpLoading}>
                {otpLoading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )}
          {verificationMessage && (
            <div className="verification-message">
              <p>{verificationMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
