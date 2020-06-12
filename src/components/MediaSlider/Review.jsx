import "./Review.css";

import { Card } from "../Shared/Card";
import React from "react";

export const Review = (props) => {
  return (
    <Card width={700} height={150}>
      <div className="review--parent">
        <span>
          <img className="review--logo" src={props.logo} alt="Company logo" />
        </span>
        <span className="review--quote">“{props.quote}”</span>
      </div>
    </Card>
  );
};
