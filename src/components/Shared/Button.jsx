import React from "react";
import { styles } from "./Button.styles";

export const Button = (props) => {
  const dimensions = {
    width: props.width ? props.width : "auto",
    height: props.height ? props.height : "auto",
  };
  return (
    <button style={{ ...styles.button, ...dimensions }}>{props.text}</button>
  );
};
