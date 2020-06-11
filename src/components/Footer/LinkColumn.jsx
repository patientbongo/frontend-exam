import React from "react";
import { styles } from "./LinkColumn.styles";

export const LinkColumn = (props) => {
  return (
    <div style={styles.parent}>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <b style={styles.header}>{props.title}</b>
        </li>
        {props.links.map((link) => {
          return (
            <li style={styles.listItem} key={link.id}>
              <a href={link.link} style={styles.link}>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
