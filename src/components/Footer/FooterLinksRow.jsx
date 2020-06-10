import { LinkColumn } from "./LinkColumn";
import React from "react";
import { styles } from "./FooterLinksRow.styles";

const footerLinksList = [
  {
    title: "title1",
    links: [
      { id: 1, title: "link1", link: "link1link" },
      { id: 2, title: "link2", link: "link2link" },
      { id: 3, title: "link3", link: "link3link" },
    ],
  },
  {
    title: "title2",
    links: [
      { id: 4, title: "link1", link: "link1link" },
      { id: 5, title: "link2", link: "link2link" },
    ],
  },
  {
    title: "title3",
    links: [
      { id: 6, title: "link1", link: "link1link" },
      { id: 7, title: "link2", link: "link2link" },
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
