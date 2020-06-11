import React from "react";
import facebook from "../../assets/logos/facebook.svg";
import instagram from "../../assets/logos/instagram.svg";
import instagram2 from "../../assets/logos/instagram.png";
import pinterest from "../../assets/logos/pinterest.svg";
import { styles } from "./SocialButtons.styles";
import twitter from "../../assets/logos/twitter.svg";
import youtube from "../../assets/logos/youtube.svg";

const socialData = [
  {
    logo: youtube,
    alt: "alt",
    link: "youtube",
  },
  {
    logo: pinterest,
    alt: "alt",
    link: "pinterest",
  },
  {
    logo: facebook,
    alt: "alt",
    link: "facebook",
  },
  {
    logo: twitter,
    alt: "alt",
    link: "twitter",
  },
  {
    logo: instagram,
    alt: "alt",
    link: "instagram",
  },
];

export const SocialButtons = () => {
  return (
    <div style={styles.parent}>
      <ul style={styles.list}>
        {socialData.map((social) => {
          return (
            <li style={styles.logoBackground} key={social.link}>
              <a style={styles.socialLink} href={social.link}>
                <img style={styles.logo} src={social.logo} alt={social.alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
