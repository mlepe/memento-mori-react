/*
 * File: week.js
 * Project: memento-mori-react
 * File Created: Monday, 5th June 2023 5:36:24 pm
 * Author: Matthieu LEPERLIER (m.leperlier42@gmail.com)
 * -----
 * Last Modified: Monday, 5th June 2023 5:36:24 pm
 * Modified By: Matthieu LEPERLIER (m.leperlier42@gmail.com>)
 * -----
 * Copyright 2021  - 2023 Matthieu LEPERLIER, Nomad Solutions
 */
import React, { useEffect, useState } from "react";
import { differenceInWeeks, add } from "date-fns";
import "components/week.css";

const Week = ({ lived }) => {
  return lived ? (
    <div className="Week Week--state-lived"></div>
  ) : (
    <div className="Week"></div>
  );
};

export default Week;

const Weeks = ({ dob, expectancy }) => {
  const [weeksLived, setWeeksLived] = useState();
  const [weeksToLive, setWeeksToLive] = useState();
  const [totalWeeks, setTotalWeeks] = useState();
  const [weeks, setWeeks] = useState();

  useEffect(() => {
    console.group("Weeks.useEffect() deps=[dob, expectancy]");
    calculateWeeks(dob, expectancy);
    calculateWeeksLived(dob);
    calculateWeeksToLive();
    console.groupEnd();
  }, [dob, expectancy]);

  useEffect(() => {
    createWeeks();
  }, [totalWeeks]);

  const calculateWeeks = (dob, expectancy) => {
    console.group("Weeks.calculateWeeks()");
    console.log("dob:", dob);
    console.log("expectancy:", expectancy);
    let dobDate = new Date(dob);
    console.log("dobDate:", dobDate);
    let deathDate = add(new Date(dob), { years: expectancy });
    console.log("deathDate:", deathDate);
    setTotalWeeks(differenceInWeeks(deathDate, new Date(dob)));
    console.groupEnd();
  };

  const calculateWeeksLived = (dob) => {
    console.group("Weeks.calculateWeeksLived()");
    console.log("dob:", dob);
    let dobDate = new Date(dob);
    console.log("dobDate:", dobDate);
    setWeeksLived(differenceInWeeks(Date.now(), dobDate));
  };

  const calculateWeeksToLive = () => {
    console.group("Weeks.calculateWeeksToLive()");
    let totalWeeks = calculateWeeks(dob, expectancy);
    let remainingWeeks = totalWeeks - weeksLived;
    console.groupEnd();
    setWeeksToLive(remainingWeeks);
  };

  const createWeeks = () => {
    console.group("Weeks.createWeeks()");
    let weeks = [];
    let lastIndex;
    console.log("totalWeeks:", totalWeeks);
    for (let i = 0; i <= totalWeeks; i++) {
      if (i % 52 === 0) {
        weeks[i] = [];
        lastIndex = i;
      }
      console.log("In loop. i:", i);
      if (i <= weeksLived) {
        console.log("lived=true, i=", i);
        weeks[lastIndex].push({ lived: true });
      } else {
        console.log("lived=false, i=", i);
        weeks[lastIndex].push({ lived: false });
      }
    }
    console.log("Out of loop");
    console.log("weeks:", weeks);
    setWeeks(weeks);
    console.groupEnd();
  };

  return (
    <div className="Weeks">
      {weeks
        ? weeks.map((w, i) => {
            return (
              <div className="Row" key={"row_" + i}>
                <span className="Year" key={"year_" + i}>
                  {i / 52}
                </span>
                {w.map((ww, ii) => {
                  return <Week lived={ww.lived} key={"week_" + ii}></Week>;
                })}
              </div>
            );
          })
        : "Weeks undefined"}
    </div>
  );
};

export { Weeks };
