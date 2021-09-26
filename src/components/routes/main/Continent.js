import { React } from "react";
import classes from "./Continent.module.css";
function Continent() {
  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>Filter by Region</button>
      <div className={classes.continents}>content</div>
    </div>
  );
}
export default Continent;
