import "./Hero.css";

import { Button } from "../Shared/Button";
import React from "react";
import heroImage from "../../assets/gmapsinworkout.png";

export const Hero = () => {
  return (
    <div className="hero--parent">
      <img className="hero--image" src={heroImage} alt="hero" />
      <div className="hero--contentContainer">
        <h1 className="hero--title">
          The best personal training, right in your own home
        </h1>
        <Button width="400px" height="50px" text="JOIN IFIT COACH" />
      </div>
    </div>
  );
};
