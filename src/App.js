import React, { Component } from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import DownIcon from "./components/DownIcon";
import NavBar from "./components/NavBar";
import data from "./data.json";
import "./App.css";

import { Link, Element } from "react-scroll";
import SnowStorm from "react-snowstorm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SnowStorm
          snowColor="#F7A7A7"
          animationInterval="50"
          flakesMaxActive="200"
        />
        <NavBar />
        <TitleSection />
        <Element name="about" className="element"></Element>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>

        <AboutSection id="about" />
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="skills" className="element"></Element>
        <SkillSection id="skills" />
      </div>
    );
  }
}

export default App;
