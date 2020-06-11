import "./MainNavigation.css";

import { Button } from "../Shared/Button";
import React from "react";
import logo from "../../assets/logos/ifit-coach-logo.svg";

export const MainNavigation = () => {
  return (
    <div className="main-navigation--parent">
      <span className="main-navigation--logoContainer">
        <img className="main-navigation--logo" src={logo} alt="logo" />
      </span>
      <div className="main-navigation--linkContainer">
        <a href="#exercise" className="main-navigation--mainNavigationLinks">
          EXERCISE
        </a>
        <a href="#nutrition" className="main-navigation--mainNavigationLinks">
          NUTRITION
        </a>
        <a href="#activity" className="main-navigation--mainNavigationLinks">
          ACTIVITY
        </a>
        <a href="#sleep" className="main-navigation--mainNavigationLinks">
          SLEEP
        </a>
      </div>
      <span className="main-navigation--button">
        <Button text="SIGN UP" />
      </span>
    </div>
  );
};
