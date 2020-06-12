import "./CircularButton.css";

import React from "react";

export const CircularButton = (props) => {
  return (
    <button className="circular-button--button">
      <img src={props.icon} alt="left arrow icon" />
    </button>
  );
};
