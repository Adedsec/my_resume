import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
      </Fullpage>
    );
  }
}
export default AboutSection;
