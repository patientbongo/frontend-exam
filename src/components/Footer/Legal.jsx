import "./Legal.css";

import React from "react";
import { useTranslation } from "react-i18next";

export const Legal = () => {
  const { t } = useTranslation();

  return (
    <span className="legal--parent">
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          © {t("legal:rights")}
        </a>
      </span>
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          {t("legal:privacy")}
        </a>
      </span>
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          {t("legal:terms")}
        </a>
      </span>
    </span>
  );
};
