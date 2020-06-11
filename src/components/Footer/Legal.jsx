import React from "react";
import { styles } from "./Legal.styles";

export const Legal = () => {
  return (
    <span style={styles.parent}>
      <span style={styles.linkContainer}>
        <a style={styles.link} href="###">
          © iFit.com. All Rights Reserved.
        </a>
      </span>
      <span style={styles.linkContainer}>
        <a style={styles.link} href="###">
          Privacy Policy
        </a>
      </span>
      <span style={styles.linkContainer}>
        <a style={styles.link} href="###">
          Terms of Use
        </a>
      </span>
    </span>
  );
};
