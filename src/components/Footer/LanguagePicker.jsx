import "./LanguagePicker.css";

import React, { useState } from "react";

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
  const [selected, setSelected] = useState("en-us");

  return (
    <select
      className="language-picker--parent"
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
