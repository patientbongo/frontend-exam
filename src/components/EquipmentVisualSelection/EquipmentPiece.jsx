import { Card } from "../Shared/Card";
import React from "react";
import { styles } from "./EquipmentVisualSelection.styles";

export const EquipmentPiece = (props) => {
  return (
    <Card width={250} height={300}>
      <img style={styles.image} src={props.image} alt="pic" />
      <div style={styles.title}>{props.title}</div>
    </Card>
  );
};
