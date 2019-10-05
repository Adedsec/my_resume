import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";
import "./SkillSection.css";
class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third" id={this.props.id}>
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map(each_skill => {
            return <SkillCard skill={each_skill} />;
          })}
        </div>
      </Fullpage>
    );
  }
}
export default SkillSection;
