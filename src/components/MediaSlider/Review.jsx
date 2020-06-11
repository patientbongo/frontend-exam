import { Card } from "../Shared/Card";
import React from "react";
import { styles } from "./Review.styles";

export const Review = (props) => {
  return (
    <Card width={700} height={150}>
      <div style={styles.parent}>
        <span>
          <img style={styles.logo} src={props.logo} alt="logo" />
        </span>
        <span style={styles.quote}>{props.quote}</span>
      </div>
    </Card>
  );
};
