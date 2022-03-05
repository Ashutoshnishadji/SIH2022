import { Link } from "@mui/material";
import React from "react";
import './NavBar.css'

export default function Navbar() {
  return (
    <>
     <nav>
        <div className="logo"> 
            <p className="logo-firstname">Student </p>
            <p className="logo-lastname">Tracker</p>
        </div>
        <ul className="navigation">
            <li id="homebutton" className="nav-link">Home</li>
        <Link to="/Profile" >    <li id="skillbutton" className="nav-link">About Us</li> </Link>
            <li id="projectbutton" className="nav-link">FeedBack</li>
            <li id="contactbutton" className="nav-link">Log in </li>
        </ul>

    </nav>
    </>
  );
}
