import { CircularButton } from "../Shared/CircularButton";
import React from "react";
import { Review } from "./Review";
import { mockData } from "./mockData";
import { styles } from "./MediaSlider.styles";

export const MediaSlider = () => {
  return (
    <div style={styles.parent}>
      <span style={styles.buttonContainer}>
        <CircularButton />
      </span>
      {mockData.map((review) => {
        return (
          <Review logo={review.logo} quote={review.quote} key={review.id} />
        );
      })}
      <span style={styles.buttonContainer}>
        <CircularButton />
      </span>
    </div>
  );
};
