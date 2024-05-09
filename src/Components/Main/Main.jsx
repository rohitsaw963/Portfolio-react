import React from "react";
import "./Main.css";
import profilePic from "../../assets/profilePic.png";

const Main = () => {
  return (
    <div className="Main">
      <div>
        <h2>
          I m <span id="name">Rohit Kumar Saw,</span>
        </h2>
        <h1>Front-End Developer</h1>
        <div className="main-btn">
          <div className="resume">My Resume</div>
          <div className="main-connect">Connect with Me</div>
        </div>
      </div>

      <img src={profilePic} alt="" />
    </div>
  );
};

export default Main;
