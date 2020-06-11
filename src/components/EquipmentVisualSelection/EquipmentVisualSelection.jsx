import "./EquipmentVisualSelection.css";

import { EquipmentPiece } from "./EquipmentPiece";
import React from "react";
import { mockData } from "./mockData";

export const EquipmentVisualSelection = () => {
  return (
    <div className="equipment-visual-selection--parent">
      <h4 className="equipment-visual-selection--title">
        Interested in our exciting iFit-enabled equipment?
      </h4>
      <div className="equipment-visual-selection--equipmentList">
        {mockData.map((equipment) => {
          return (
            <EquipmentPiece
              image={equipment.image}
              title={equipment.title}
              key={equipment.id}
            />
          );
        })}
      </div>
    </div>
  );
};
