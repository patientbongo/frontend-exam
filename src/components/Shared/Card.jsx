import React, { useState } from "react";

import { styles } from "./Card.styles";

export const Card = (props) => {
  const [isHovering, setHovering] = useState(false);

  const dimensions = {
    width: props.width ? props.width : "auto",
    height: props.height ? props.height : "auto",
    transform: isHovering ? "translate(-5px, -5px)" : "none",
    boxShadow: isHovering
      ? "0 10px 20px rgba(0, 0, 0, 0.2)"
      : "0 1px 2px rgba(0, 0, 0, 0.2)",
  };
  const handleMouseOver = () => {
    if (props.hover) {
      setHovering(!isHovering);
    }
  };
  return (
    <div
      onMouseEnter={() => handleMouseOver()}
      onMouseLeave={() => handleMouseOver()}
      style={{ ...styles.card, ...dimensions }}
    >
      {props.children}
    </div>
  );
};
