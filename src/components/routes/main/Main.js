import React from "react";
import classes from "./Main.module.css";
import SearchBar from "./SearchBar";
function Main() {
  return (
    <div className={classes.main}>
      <SearchBar />
    </div>
  );
}
export default Main;
