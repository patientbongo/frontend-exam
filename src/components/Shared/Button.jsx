import React from "react";
import { styles } from "./Button.styles";

export const Button = (props) => {
  return <button style={styles.button}>{props.text}</button>;
};
