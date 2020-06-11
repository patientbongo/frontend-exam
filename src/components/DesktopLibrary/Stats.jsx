import React from "react";
import distance from "../../assets/icons/icn_distance_line.svg";
import { styles } from "./Stats.styles";
import timer from "../../assets/icons/icn_timer_linemdpi.svg";

export const Stats = (props) => {
  return (
    <div style={styles.parent}>
      <img style={styles.child} src={timer} alt="timer" />
      <span style={{ ...styles.text, ...styles.child }}>{props.time}</span>
      <img style={styles.child} src={distance} alt="distance" />
      <span style={{ ...styles.text, ...styles.child }}>{props.distance}</span>
    </div>
  );
};
