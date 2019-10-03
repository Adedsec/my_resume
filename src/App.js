import React, { Component } from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav"></div>
        <TitleSection />
        <AboutSection />
        <SkillSection />
      </div>
    );
  }
}

export default App;
