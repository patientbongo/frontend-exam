import React from "react";
import distance from "../../assets/icons/icn_distance_line.svg";
import { styles } from "./Stats.styles";
import timer from "../../assets/icons/icn_timer_linemdpi.svg";

export const Stats = (props) => {
  return (
    <div style={styles.parent}>
      <img src={timer} alt="timer" />
      <span>{props.time}</span>
      <img src={distance} alt="distance" />
      <span>{props.distance}</span>
    </div>
  );
};
