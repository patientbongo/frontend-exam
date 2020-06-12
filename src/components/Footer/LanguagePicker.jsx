import "./LanguagePicker.css";

import React, { useState } from "react";

import { useTranslation } from "react-i18next";

const availableLanguages = [
  {
    id: "en",
    text: "English",
  },
  {
    id: "es",
    text: "Spanish",
  },
];

export const LanguagePicker = () => {
  const [selected, setSelected] = useState("en");
  const { i18n } = useTranslation("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const updateLanguage = (language) => {
    setSelected(language);
    changeLanguage(language);
  };

  return (
    <select
      className="language-picker--parent"
      value={selected}
      onChange={(event) => updateLanguage(event.target.value)}
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
