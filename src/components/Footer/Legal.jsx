import "./Legal.css";

import React from "react";

export const Legal = () => {
  return (
    <span className="legal--parent">
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          © iFit.com. All Rights Reserved.
        </a>
      </span>
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          Privacy Policy
        </a>
      </span>
      <span className="legal--linkContainer">
        <a className="legal--link" href="###">
          Terms of Use
        </a>
      </span>
    </span>
  );
};
