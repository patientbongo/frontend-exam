import { CircularButton } from "../Shared/CircularButton";
import React from "react";
import { Review } from "./Review";
import leftArrow from "../..//assets/icons/left_arrow.png";
import { mockData } from "./mockData";
import rightArrow from "../..//assets/icons/right_arrow.png";
import { styles } from "./MediaSlider.styles";

export const MediaSlider = () => {
  return (
    <div style={styles.parent}>
      <span style={styles.buttonContainer}>
        <CircularButton icon={leftArrow} />
      </span>
      {mockData.map((review) => {
        return (
          <Review logo={review.logo} quote={review.quote} key={review.id} />
        );
      })}
      <span style={styles.buttonContainer}>
        <CircularButton icon={rightArrow} />
      </span>
    </div>
  );
};
