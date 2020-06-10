import { EquipmentPiece } from "./EquipmentPiece";
import React from "react";
import { mockData } from "./mockData";
import { styles } from "./EquipmentVisualSelection.styles";

export const EquipmentVisualSelection = () => {
  return (
    <div style={styles.parent}>
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
  );
};
