import "./BlogPost.css";

import { Card } from "../Shared/Card";
import React from "react";
import { Stats } from "./Stats";
import playlistIcon from "../../assets/icons/icn_playlist.svg";

export const BlogPost = (props) => {
  return (
    <span className="blog-post--parent">
      <Card hover width="95%" height="95%">
        <span className="blog-post--imageContainer">
          <img className="blog-post--image" src={props.image} alt="mainImage" />
          {props.workouts.count > 0 && (
            <div className="blog-post--workouts">
              <span className="blog-post--workoutTextCount">{props.workouts.count}</span>
              <span className="blog-post--workoutText">WORKOUTS</span>
              <a href={props.workouts.link}>
                <img className="blog-post--workoutTextIcon" src={playlistIcon} alt="alt" />
              </a>
            </div>
          )}
        </span>
        <div className="blog-post--body">
          <div className="blog-post--details">
            <p className="blog-post--title">{props.title}</p>
            {props.stats.time && props.stats.distance && (
              <Stats distance={props.stats.distance} time={props.stats.time} />
            )}
            {props.detailsLink && (
              <a href={props.detailsLink} className="blog-post--detailsLink">
                VIEW DETAILS
              </a>
            )}
          </div>
          <img className="blog-post--author" src={props.author} alt="author" />
        </div>
      </Card>
    </span>
  );
};
