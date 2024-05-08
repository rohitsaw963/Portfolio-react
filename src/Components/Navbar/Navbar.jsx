import React from "react";
import "./Navbar.css";
import images from "../../assets/images.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={images} alt="" width="105px" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
