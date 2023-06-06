import { Weeks } from "./week";

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
const Layout = () => {
  return (
    <div className="App">
      <Weeks dob="05-02-1995" expectancy={80}></Weeks>
    </div>
  );
};

export default Layout;
