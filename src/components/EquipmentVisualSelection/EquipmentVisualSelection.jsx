import { EquipmentPiece } from "./EquipmentPiece";
import React from "react";
import { mockData } from "./mockData";
import { styles } from "./EquipmentVisualSelection.styles";

export const EquipmentVisualSelection = () => {
  return (
    <div style={styles.parent}>
      <h4 style={styles.title}>Interested in our exciting iFit-enabled equipment?</h4>
      <div style={styles.equipmentList}>
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
