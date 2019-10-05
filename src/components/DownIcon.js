import React, { Component } from "react";

import "./DownIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const DownIcon = props => {
  return (
    <div className="down-container" onClick={props.onClick}>
      <div className="down">
        <FontAwesomeIcon size="5x" className="down" icon={faAngleDown} />
      </div>
    </div>
  );
};

export default DownIcon;
