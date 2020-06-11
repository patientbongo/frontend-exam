import "./Button.css";

import React from "react";

export const Button = (props) => {
  const dimensions = {
    width: props.width ? props.width : "auto",
    height: props.height ? props.height : "auto",
  };
  return (
    <button className="button--button" style={dimensions}>
      {props.text}
    </button>
  );
};
