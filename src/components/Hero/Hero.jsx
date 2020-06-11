import { Button } from "../Shared/Button";
import React from "react";
import heroImage from "../../assets/gmapsinworkout.png";
import { styles } from "./Hero.styles";

export const Hero = () => {
  return (
    <div style={styles.parent}>
      <img style={styles.image} src={heroImage} alt="hero" />
      <div style={styles.contentContainer}>
        <h1 style={styles.title}>
          The best personal training, right in your own home
        </h1>
        <Button width="400px" height="50px" text="JOIN IFIT COACH" />
      </div>
    </div>
  );
};
