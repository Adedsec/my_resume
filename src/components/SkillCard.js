import React, { Component } from "react";
import "./skillcard.css";
class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img
            src={skill.content.image}
            alt={skill.content.title}
            className="card-image"
          />
        </div>
        <div className="skill-title-wrapper">
          <h4 className="skil-title">{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
export default SkillCard;
