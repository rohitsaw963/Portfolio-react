import React from "react";
import "./Main.css";
import profilePic from "../../assets/profilePic.png";

const Main = () => {
  return (
    <div className="Main">
      <div>
        <h2>I m Rohit Kumar Saw</h2> and i m<h1>Front-End Developer</h1>
      </div>

      <img src={profilePic} alt="" />
    </div>
  );
};

export default Main;
