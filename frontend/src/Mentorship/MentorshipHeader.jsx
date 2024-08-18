import "./MentorshipHeader.css";
import { NavLink } from "react-router-dom";
import Mentorship from "../assets/images/Mentorship.png";
import Discountt from "../assets/images/Discountt.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import axiosInstance from "../refresh";

export default function MentorshipHeader() {
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  useEffect(() => {
    const fetchPermissions = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await axiosInstance.get(
            `${config.BASE_URL}/api/user/my-permissions/`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setIsPaymentDone(response.data.is_payment_done);
        } catch (error) {
          console.error("Failed to fetch permissions:", error);
        }
      }
    };
    fetchPermissions();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <section id="MentorshipHeader">
        <div className="Mentorship-header-left">
          <img src={Mentorship} alt="Mentorship" />
        </div>

        <div className="Mentorship-header-right">
          <div className="Mentorship-header-text">
            <h1>Mentorship Program</h1>
            <h3>
              for JEE Main and <br />
              Advanced
            </h3>
            <p>
              Unlock personalized success with our mentorship batch, offering
              tailored guidance, continuous monitoring, exclusive sessions with
              VJ Sir, rapid doubt resolution, and customized daily practice
              problems based on AI/ML analysis.
            </p>
          </div>

          <div className="Mentorship-header-price">
            <div className="mentorship-header-price">
              <h3>₹5,000/-</h3>
              <h4>₹8,000</h4>
              <h2>for 1 year !!</h2>
            </div>
            <img src={Discountt} alt="Discount" />
          </div>
          {!isPaymentDone && (
            <div className="Mentorship-header-btn">
              <NavLink onClick={scrollToTop} to="/highlights"> Buy Now </NavLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
