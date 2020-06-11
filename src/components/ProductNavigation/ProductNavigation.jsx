import React from "react";
import { styles } from "./ProductNavigation.styles";

export const ProductNavigation = () => {
  return (
    <div style={styles.parent}>
      <a href="#blog" style={styles.productLink}>
        BLOG
      </a>
      <a href="#nourish" style={styles.productLink}>
        NOURISH
      </a>
      <a href="#shop" style={styles.productLink}>
        SHOP
      </a>
    </div>
  );
};
