import { Button } from "../Shared/Button";
import React from "react";
import heroImage from "../../assets/gmapsinworkout.png";
import { styles } from "./Hero.styles";

export const Hero = () => {
  return (
    <div style={styles.parent}>
      <span>
        <img style={styles.image} src={heroImage} alt="hero" />
      </span>
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>
          The best personal training, right in your own home
        </h1>
        <Button />
      </div>
    </div>
  );
};
