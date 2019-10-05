import React, { Component } from "react";

import data from "../data.json";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="theme-warraper">
          <a href="#" className="theme">
            <FontAwesomeIcon size="5x" className="down" icon={faPaintBrush} />
          </a>
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
