import { Link } from "react-router-dom";
import React from "react";

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
            <img src="images\logo.png" alt="" />
          </div>

          <div className="profile">
            <div className="profile-img">
              <img src="images\profile.png" alt="" />
            </div>
            <div>Profile</div>
          </div>

          <div className="Nav-item">
            <ul>
              <li>
                <Link className="links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="links" to="#">
                  Resource
                </Link>
              </li>
              <li>
                <Link className=" active links" to="/Mentorship">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link className="links" to="/AboutUs">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="links" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
