/*
 * File: layout.js
 * Project: memento-mori-react
 * File Created: Monday, 5th June 2023 5:37:35 pm
 * Author: Matthieu LEPERLIER (m.leperlier42@gmail.com)
 * -----
 * Last Modified: Monday, 5th June 2023 5:37:35 pm
 * Modified By: Matthieu LEPERLIER (m.leperlier42@gmail.com>)
 * -----
 * Copyright 2021  - 2023 Matthieu LEPERLIER, Nomad Solutions
 */
import React from "react";
import { useState } from "react";
import { Weeks } from "./week";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import { useEffect } from "react";
const Layout = () => {
  const [dob, setDob] = useState();
  const [expectancy, setExpectancy] = useState("80");

  const getDob = (e) => {
    console.group("Layout.getDob()");
    let val = e;
    setDob(val);
    console.log("setDob to:", val);
    console.groupEnd();
  };

  const getExpectancy = (e) => {
    console.group("Layout.getExpectancy()");
    let val = e;
    setExpectancy(val);
    console.log("setExpectancy to:", val);
    console.groupEnd();
  };

  return (
    <div className="App">
      <Header></Header>
      <form className="Form">
        <div className="Form__input">
          <label>
            Please enter your birthdate:<pre>&nbsp;</pre>
          </label>
          <input
            name="dobInput"
            type="date"
            onChange={(e) => getDob(e.target.value)}
          ></input>
        </div>
        <hr />
        <div className="Form__input">
          <label>
            Set your life expectancy:<pre>&nbsp;</pre>
          </label>
          <input
            name="expectancyInput"
            type="number"
            min="0"
            //defaultValue="80"
            max="120"
            //onLoad={(e) => getExpectancy(e.target.value)}
            onChange={(e) => getExpectancy(e.target.value)}
          ></input>
        </div>
      </form>
      {dob && <Weeks dob={dob} expectancy={expectancy}></Weeks>}
      {/* <Weeks dob="05-02-1995" expectancy={80}></Weeks> */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
