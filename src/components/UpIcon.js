import React from "react";

import "./DownIcon.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const UpIcon = props => {
  return (
    <div className="down-container" onClick={props.onClick}>
      <div className="down">
        <FontAwesomeIcon size="5x" className="down" icon={faAngleUp} />
      </div>
    </div>
  );
};

export default UpIcon;
