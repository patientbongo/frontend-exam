import React from "react";
import { styles } from "./Card.styles";

export const Card = (props) => {
  const dimensions = {
    width: props.width,
    height: props.height,
  };
  return <div style={{ ...styles.card, ...dimensions }}>{props.children}</div>;
};
