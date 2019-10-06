import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second" id={this.props.id}>
        <div className="title-wrapper">
          <h3 className="about-title">{data.sections[0].title}</h3>
        </div>

        <div className="text-wrapper">
          <p>{data.sections[0].items[0].content}</p>
        </div>
      </Fullpage>
    );
  }
}
export default AboutSection;
