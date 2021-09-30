import React from "react";
import classes from "./BorderCountry.module.css";

function BorderCountry(props) {
  return <button className={classes.container}>{props.Info}</button>;
}

export default BorderCountry;
