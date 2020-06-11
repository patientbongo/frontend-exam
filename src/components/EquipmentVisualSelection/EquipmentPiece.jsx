import "./EquipmentPiece.css";

import { Card } from "../Shared/Card";
import React from "react";

export const EquipmentPiece = (props) => {
  return (
    <Card width="auto" height="auto">
      <span className="equipment-piece--container">
        <div className="equipment-piece--imageContainer">
          <img className="equipment-piece--image" src={props.image} alt="pic" />
        </div>
        <div className="equipment-piece--title">{props.title}</div>
      </span>
    </Card>
  );
};
