import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import "./TitleSection.css";

class TitleSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1 className="title">{data.title}</h1>
          <h2 className="subtitle">{data.subtitle}</h2>
          <div className="social-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="social-item">
                  <SocialIcon
                    url={data.links[key]}
                    target="_blank"
                    rel="social"
                  />
                </div>
              );
            })}
          </div>
        </Fullpage>
      </div>
    );
  }
}
export default TitleSection;
