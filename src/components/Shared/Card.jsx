import React from "react";
import { styles } from "./Card.styles";

export const Card = (props) => {
  const dimensions = {
    width: props.width ? props.width : "auto",
    height: props.height ? props.height : "auto",
  };
  return <div style={{ ...styles.card, ...dimensions }}>{props.children}</div>;
};
