import { Button } from "../Shared/Button";
import React from "react";
import { Review } from "./Review";
import { mockData } from "./mockData";
import { styles } from "./MediaSlider.styles";

export const MediaSlider = () => {
  return (
    <div style={styles.parent}>
      <Button />
      {mockData.map((review) => {
        return (
          <Review logo={review.logo} quote={review.quote} key={review.id} />
        );
      })}
      <Button />
    </div>
  );
};
