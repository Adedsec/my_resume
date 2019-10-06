import React, { Component } from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import DownIcon from "./components/DownIcon";
import UpIcon from "./components/UpIcon";
import NavBar from "./components/NavBar";
import data from "./data.json";
import "./App.css";

import { Link, Element } from "react-scroll";
import SnowStorm from "react-snowstorm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      colorPrimary: "#ffffff",
      colorSecondary: "#000000"
    };
    this.themeNumber = 0;
  }

  changeColor = () => {
    if (this.themeNumber === 3) {
      this.themeNumber = 0;
    }
    switch (this.themeNumber) {
      case 0:
        this.setState({
          colorPrimary: "#FFE05D",
          colorSecondary: "#A646B3"
        });
        break;
      case 1:
        this.setState({
          colorPrimary: "#ffffff",
          colorSecondary: "#00CE21"
        });
        break;
      case 2:
        this.setState({
          colorPrimary: "#ffffff",
          colorSecondary: "#000000"
        });
        break;
      default:
        this.state = {
          colorPrimary: "#ffffff",
          colorSecondary: "#000000"
        };
        break;
    }

    this.themeNumber++;
    console.log(this.themeNumber);
  };
  render() {
    return (
      <div
        className="App"
        style={{
          color: this.state.colorPrimary,
          backgroundColor: this.state.colorSecondary
        }}
      >
        <SnowStorm
          snowColor="#ffffff"
          animationInterval="50"
          flakesMaxActive="200"
        />
        <Element name="home" className="element"></Element>
        <NavBar
          onThemeClick={() => {
            this.changeColor();
          }}
        />

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
        <Link
          activeClass="active"
          to="home"
          spy={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <UpIcon icon={data.icons.down} />
        </Link>
      </div>
    );
  }
}

export default App;
