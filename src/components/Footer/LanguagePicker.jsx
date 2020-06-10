import React, { useState } from "react";

import { styles } from "./LanguagePicker.styles";

const availableLanguages = [
  {
    id: "en-us",
    text: "English",
  },
  {
    id: "es-us",
    text: "Spanish",
  },
  {
    id: "fr-us",
    text: "French",
  },
];

export const LanguagePicker = () => {
  const [selected, setSelected] = useState("grapefruit");

  return (
    <select
      style={styles.parent}
      value={selected}
      onChange={(event) => setSelected(event.target.value)}
    >
      {availableLanguages.map((language) => {
        return (
          <option value={language.id} key={language.id}>
            {language.text}
          </option>
        );
      })}
    </select>
  );
};
