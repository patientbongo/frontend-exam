import "./Footer.css";

import { FooterLinksRow } from "./FooterLinksRow";
import { LanguagePicker } from "./LanguagePicker";
import { Legal } from "./Legal";
import React from "react";
import { SocialButtons } from "./SocialButtons";

export const Footer = () => {
  return (
    <div className="footer--parent">
      <FooterLinksRow />
      <SocialButtons />
      <div className="footer--bottomBar">
        <LanguagePicker />
        <Legal />
      </div>
    </div>
  );
};
