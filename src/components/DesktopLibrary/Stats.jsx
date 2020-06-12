import "./Stats.css";

import React from "react";
import distance from "../../assets/icons/icn_distance_line.svg";
import timer from "../../assets/icons/icn_timer_linemdpi.svg";

export const Stats = (props) => {
  return (
    <div className="stats--parent">
      <img className="stats--child" src={timer} alt="Timer Icon" />
      <span className="stats--text child">{props.time}</span>
      <img className="stats--child" src={distance} alt="Distance Icon" />
      <span className="stats--text child">{props.distance}</span>
    </div>
  );
};
