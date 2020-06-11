import { LinkColumn } from "./LinkColumn";
import React from "react";
import { styles } from "./FooterLinksRow.styles";

const footerLinksList = [
  {
    title: "Company",
    links: [
      { id: 1, title: "About", link: "#about" },
      { id: 2, title: "Contact Us", link: "#contactus" },
      { id: 3, title: "Careers", link: "#Careers" },
    ],
  },
  {
    title: "Account",
    links: [
      { id: 4, title: "Log In", link: "#login" },
      { id: 5, title: "Create Account", link: "#createaccount" },
    ],
  },
  {
    title: "Support",
    links: [
      { id: 6, title: "Help Center", link: "#helpcenter" },
      { id: 7, title: "Accessibility", link: "#accessibility" },
    ],
  },
];

export const FooterLinksRow = () => {
  return (
    <div style={styles.parent}>
      {footerLinksList.map((links) => {
        return (
          <LinkColumn
            links={links.links}
            title={links.title}
            key={links.title}
          />
        );
      })}
    </div>
  );
};
