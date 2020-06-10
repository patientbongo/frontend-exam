import { Card } from "../Shared/Card";
import React from "react";
import { Stats } from "./Stats";
import { styles } from "./BlogPost.styles";

export const BlogPost = (props) => {
  return (
    <Card width={200} height={200}>
      <img style={styles.image} src={props.image} alt="mainImage" />
      <div style={styles.workouts}>{props.workouts.count}</div>
      <div style={styles.body}>
        <div style={styles.details}>
          <b style={styles.title}>{props.title}</b>
          <Stats distance={props.stats.distance} time={props.stats.time} />
          <div style={styles.detailsButton}>VIEW DETAILS</div>
        </div>
        <img style={styles.author} src={props.author} alt="author" />
      </div>
    </Card>
  );
};
