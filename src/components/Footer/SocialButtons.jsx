import "./SocialButtons.css";

import React from "react";
import facebook from "../../assets/logos/facebook.svg";
import instagram from "../../assets/logos/instagram.svg";
import pinterest from "../../assets/logos/pinterest.svg";
import twitter from "../../assets/logos/twitter.svg";
import youtube from "../../assets/logos/youtube.svg";

const socialData = [
  {
    logo: youtube,
    alt: "Youtube icon",
    link: "youtube",
  },
  {
    logo: pinterest,
    alt: "Pinterest icon",
    link: "pinterest",
  },
  {
    logo: facebook,
    alt: "Facebook icon",
    link: "facebook",
  },
  {
    logo: twitter,
    alt: "Twitter icon",
    link: "twitter",
  },
  {
    logo: instagram,
    alt: "Instagram icon",
    link: "instagram",
  },
];

export const SocialButtons = () => {
  return (
    <div className="social-buttons--parent">
      <ul className="social-buttons--list">
        {socialData.map((social) => {
          return (
            <li className="social-buttons--logoBackground" key={social.link}>
              <a className="social-buttons--socialLink" href={social.link}>
                <img
                  className="social-buttons--logo"
                  src={social.logo}
                  alt={social.alt}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
