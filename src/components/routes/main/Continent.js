import { React } from "react";
import classes from "./Continent.module.css";
function Continent() {
  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>Filter by Region</button>
      <div className={classes.continents}>
        <ul className={classes.ul}>
          <li className={classes.li}>Africa</li>
          <li className={classes.li}>America</li>
          <li className={classes.li}>Asia</li>
          <li className={classes.li}>Europe</li>
          <li className={classes.li}>Oceania</li>
        </ul>
      </div>
    </div>
  );
}
export default Continent;
