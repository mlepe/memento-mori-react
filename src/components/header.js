/*
 * File: header.js
 * Project: memento-mori-react
 * File Created: Monday, 5th June 2023 5:37:19 pm
 * Author: Matthieu LEPERLIER (m.leperlier42@gmail.com)
 * -----
 * Last Modified: Monday, 5th June 2023 5:37:19 pm
 * Modified By: Matthieu LEPERLIER (m.leperlier42@gmail.com>)
 * -----
 * Copyright 2021  - 2023 Matthieu LEPERLIER, Nomad Solutions
 */
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header__title">Memento Mori</h1>
      <h2 className="Header__subtitle">Your life in weeks</h2>
    </div>
  );
};

export default Header;
