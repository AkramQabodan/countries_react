import { React } from "react";
import classes from "./Continent.module.css";
function Continent() {
  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>Filter by Region</button>
      <div className={classes.continents}>
        <ul>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
export default Continent;
