import "./ProductNavigation.css";

import React from "react";

export const ProductNavigation = () => {
  return (
    <div className="product-navigation--parent">
      <a href="#blog" className="product-navigation--productLink">
        BLOG
      </a>
      <a href="#nourish" className="product-navigation--productLink">
        NOURISH
      </a>
      <a href="#shop" className="product-navigation--productLink">
        SHOP
      </a>
    </div>
  );
};
