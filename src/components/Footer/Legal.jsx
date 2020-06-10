import React from "react";
import { styles } from "./Legal.styles";

export const Legal = () => {
  return (
    <span style={styles.parent}>
      <span>
        <a style={styles.link} href="###">
          Link1
        </a>
      </span>
      <span>
        <a style={styles.link} href="###">
          Link2
        </a>
      </span>
      <span>
        <a style={styles.link} href="###">
          Link3
        </a>
      </span>
    </span>
  );
};
