import "./LinkColumn.css";

import React from "react";

export const LinkColumn = (props) => {
  return (
    <div className="link-column--parent">
      <ul className="link-column--list">
        <li className="link-column--listItem">
          <b className="link-column--header">{props.title}</b>
        </li>
        {props.links.map((link) => {
          return (
            <li className="link-column--listItem" key={link.id}>
              <a href={link.link} className="link-column--link">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
