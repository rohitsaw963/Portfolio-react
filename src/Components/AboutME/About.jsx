import React, { Component } from "react";
import About from "./About.css";
import coding from "../../assets/coding.png";

export default function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={coding} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="" alt="" />
        </div>
        <dix className="about-right">
          <div className="about-para"></div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML/ CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "40%" }} />
            </div>
          </div>
        </dix>
        <div className="about-projects">
          <div className="about-project">
            <h2>Project 1</h2>
            <p>Saas- Dashboard</p>
          </div>
          <hr />
          <div className="about-project">
            <h2>Project 2</h2>
            <p>MS-Word</p>
          </div>
          <hr />
          <div className="about-project">
            <h2>Project 3</h2>
            <p>Tic-Tac-Toe</p>
          </div>
        </div>
      </div>
    </div>
  );
}
