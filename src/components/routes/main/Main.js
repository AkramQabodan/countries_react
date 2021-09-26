import React from "react";
import Continent from "./Continent";
import classes from "./Main.module.css";
import SearchBar from "./SearchBar";
function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.tools}>
        <SearchBar />
        <Continent />
      </div>
    </div>
  );
}
export default Main;
