import { Card } from "../Shared/Card";
import React from "react";
import { styles } from "./Review.styles";

export const Review = (props) => {
  return (
    <Card width={250} height={100}>
      <img style={styles.logo} src={props.logo} alt="logo" />
      <div style={styles.quote}>{props.quote}</div>
    </Card>
  );
};
