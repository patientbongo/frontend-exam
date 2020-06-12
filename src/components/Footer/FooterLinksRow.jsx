import "./FooterLinksRow.css";

import { LinkColumn } from "./LinkColumn";
import React from "react";
import { useTranslation } from "react-i18next";

export const FooterLinksRow = () => {
  const { t } = useTranslation();
  const footerLinksList = [
    {
      title: t("footerLink:company"),
      links: [
        { id: 1, title: t("footerLink:about"), link: "#about" },
        { id: 2, title: t("footerLink:contact"), link: "#contactus" },
        { id: 3, title: t("footerLink:careers"), link: "#careers" },
      ],
    },
    {
      title: t("footerLink:account"),
      links: [
        { id: 4, title: t("footerLink:login"), link: "#login" },
        { id: 5, title: t("footerLink:createAccount"), link: "#createaccount" },
      ],
    },
    {
      title: t("footerLink:support"),
      links: [
        { id: 6, title: t("footerLink:help"), link: "#helpcenter" },
        { id: 7, title: t("footerLink:accessibility"), link: "#accessibility" },
      ],
    },
  ];

  return (
    <div className="footer-links-row--parent">
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
