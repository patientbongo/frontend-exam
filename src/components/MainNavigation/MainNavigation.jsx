import { Button } from "../Shared/Button";
import React from "react";
import logo from "../../assets/logos/ifit-coach-logo.svg";
import { styles } from "./MainNavigation.styles";

export const MainNavigation = () => {
  return (
    <div style={styles.parent}>
      <img src={logo} alt="logo" />
      <div style={styles.linkContainer}>
        <div style={styles.mainNavigationLinks}>Exercise</div>
        <div style={styles.mainNavigationLinks}>Nutrition</div>
        <div style={styles.mainNavigationLinks}>Activity</div>
        <div style={styles.mainNavigationLinks}>Sleep</div>
      </div>
      <Button />
    </div>
  );
};
