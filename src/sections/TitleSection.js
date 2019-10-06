import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./TitleSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
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
                  <a
                    href={data.links[key].url}
                    className="social"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      size="3x"
                      prefix="fab"
                      icon={["fab", data.links[key].icon]}
                    />
                  </a>

                  {/* <SocialIcon
                    url={data.links[key].url}
                    target="_blank"
                    rel="social"
                  /> */}
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
