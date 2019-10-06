import React, { Component } from "react";

import data from "../data.json";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  props = {
    onThemeClick: ""
  };
  render() {
    return (
      <div className="navbar">
        <div className="theme-warraper">
          <button className="theme" onClick={this.props.onThemeClick}>
            <FontAwesomeIcon size="3x" className="down" icon={faPaintBrush} />
          </button>
        </div>
        <a href="#about" className="about">
          About me !
        </a>
        <a href="#skills" className="skills">
          My skills
        </a>
      </div>
    );
  }
}
export default NavBar;
