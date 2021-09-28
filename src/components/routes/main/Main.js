import React from "react";
import Continent from "./Continent";
import Countries from "./Countries";
import SearchBar from "./SearchBar";
import classes from "./Main.module.css";
function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.tools}>
        <SearchBar />
        <Continent />
      </div>
      <Countries />
    </div>
  );
}
export default Main;
