import { Card } from "../Shared/Card";
import React from "react";
import { Stats } from "./Stats";
import playlistIcon from "../../assets/icons/icn_playlist.svg";
import { styles } from "./BlogPost.styles";

export const BlogPost = (props) => {
  return (
    <span style={styles.parent}>
      <Card width="95%" height="95%">
        <span style={styles.imageContainer}>
          <img style={styles.image} src={props.image} alt="mainImage" />
          {props.workouts.count > 0 && (
            <div style={styles.workouts}>
              <span style={styles.workoutTextCount}>
                {props.workouts.count}
              </span>
              <span style={styles.workoutText}>WORKOUTS</span>
              <a href={props.workouts.link}>
                <img
                  style={styles.workoutTextIcon}
                  src={playlistIcon}
                  alt="alt"
                />
              </a>
            </div>
          )}
        </span>
        <div style={styles.body}>
          <div style={styles.details}>
            <p style={styles.title}>{props.title}</p>
            {props.stats.time && props.stats.distance && (
              <Stats distance={props.stats.distance} time={props.stats.time} />
            )}
            {props.detailsLink && (
              <a href={props.detailsLink} style={styles.detailsLink}>
                VIEW DETAILS
              </a>
            )}
          </div>
          <img style={styles.author} src={props.author} alt="author" />
        </div>
      </Card>
    </span>
  );
};
