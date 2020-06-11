import { Button } from "../Shared/Button";
import React from "react";
import logo from "../../assets/logos/ifit-coach-logo.svg";
import { styles } from "./MainNavigation.styles";

export const MainNavigation = () => {
  return (
    <div style={styles.parent}>
      <span style={styles.logoContainer}>
        <img style={styles.logo} src={logo} alt="logo" />
      </span>
      <div style={styles.linkContainer}>
        <a href="#exercise" style={styles.mainNavigationLinks}>
          EXERCISE
        </a>
        <a href="#nutrition" style={styles.mainNavigationLinks}>
          NUTRITION
        </a>
        <a href="#activity" style={styles.mainNavigationLinks}>
          ACTIVITY
        </a>
        <a href="#sleep" style={styles.mainNavigationLinks}>
          SLEEP
        </a>
      </div>
      <span style={styles.button}>
        <Button text="SIGN UP" />
      </span>
    </div>
  );
};
