import React from "react";
import { styles } from "./ProductNavigation.styles";

export const ProductNavigation = () => {
  return (
    <div style={styles.parent}>
      <div style={styles.productLink}>Blog</div>
      <div style={styles.productLink}>Nourish</div>
      <div style={styles.productLink}>Shop</div>
    </div>
  );
};
