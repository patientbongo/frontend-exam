import React from "react";
import { styles } from "./CircularButton.styles";

export const CircularButton = (props) => {
  return <button style={styles.button}>{props.text}</button>;
};
