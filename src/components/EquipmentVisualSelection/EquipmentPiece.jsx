import { Card } from "../Shared/Card";
import React from "react";
import { styles } from "./EquipmentPiece.styles";

export const EquipmentPiece = (props) => {
  return (
    <Card width={250} height={300}>
      <span style={styles.container}>
        <div style={styles.imageContainer}>
          <img style={styles.image} src={props.image} alt="pic" />
        </div>
        <div style={styles.title}>{props.title}</div>
      </span>
    </Card>
  );
};
