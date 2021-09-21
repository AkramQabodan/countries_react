import React from "react";
import { FaMoon } from "react-icons/fa";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <div className={classes.Nav}>
      <span className={classes.title}>Where in the world?</span>
      <div className={classes["dark-mode-option"]}>
        <FaMoon className={classes.icon} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
}

export default Nav;
