import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import About from "./Components/AboutME/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
};

export default App;
