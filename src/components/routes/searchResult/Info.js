import React from "react";
import classes from "./Info.module.css";
function Info(props) {
  return (
    <li className={classes.container}>
      <span className={classes.firstInfo}>{props.firstInfo}:</span>
      <p className={classes.secondInfo}>{props.secondInfo}</p>
    </li>
  );
}
export default Info;
