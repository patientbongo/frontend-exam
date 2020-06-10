import { FooterLinksRow } from "./FooterLinksRow";
import { LanguagePicker } from "./LanguagePicker";
import { Legal } from "./Legal";
import React from "react";
import { SocialButtons } from "./SocialButtons";
import { styles } from "./Footer.styles";

export const Footer = () => {
  return (
    <div style={styles.parent}>
      <FooterLinksRow />
      <SocialButtons />
      <div style={styles.bottomBar}>
        <LanguagePicker />
        <Legal />
      </div>
    </div>
  );
};
