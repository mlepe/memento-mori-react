/*
 * File: footer.js
 * Project: memento-mori-react
 * File Created: Monday, 5th June 2023 5:37:25 pm
 * Author: Matthieu LEPERLIER (m.leperlier42@gmail.com)
 * -----
 * Last Modified: Monday, 5th June 2023 5:37:25 pm
 * Modified By: Matthieu LEPERLIER (m.leperlier42@gmail.com>)
 * -----
 * Copyright 2021  - 2023 Matthieu LEPERLIER, Nomad Solutions
 */
import React from "react";
import { getYear } from "date-fns";
import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <span>
        Made by Matthieu Leperlier{" "}
        <a href="https://github.com/mlepe">(@mlepe)</a> (c){" "}
        {getYear(new Date())}
      </span>
    </div>
  );
};

export default Footer;
