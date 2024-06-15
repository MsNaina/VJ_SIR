import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "../assets/images/logo.png";
import Profile from "../assets/images/profile.png";
import "./Navbar.css";
export default function Navbar() {

var btncontainer=document.getElementsByClassName('Nav-item')
var links=document.getElementsByClassName('links')

for (var i=0; i < links.length; i++){
  links[i].addEventListener('click', function(){

    var current=document.getElementsByClassName('active');
    current[0].className=current[0].className.replace('active')
    this.className += "active"
  } )
}

  return (
    <>
      <section id="Navbar">
        <div className="Navbar">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>

          <div className="profile">
            <img src={Profile} alt="" />
            <button>
              <NavLink to="/profile">Profile</NavLink>
            </button>
          </div>

          <div className="Nav-item">
            <ul>
              <li>
                <NavLink className="links" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Resource">Resource</NavLink>
              </li>
              <li>
                <NavLink className=" links" to="/Mentorship">
                  Mentorship
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/AboutUs">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/Login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
