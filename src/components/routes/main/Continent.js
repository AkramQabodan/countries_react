import { React, useContext } from "react";
import classes from "./Continent.module.css";
import { CountriesData } from "../../../CountriesData";
function Continent() {
  const { filter } = useContext(CountriesData);
  // function filter(e) {
  //   console.log(e.target.innerText);
  // }
  return (
    <div className={classes.dropdown}>
      <button className={classes.button}>Filter by Region</button>
      <div className={classes.continents}>
        <ul className={classes.ul}>
          <li onClick={filter} className={classes.li}>
            Africa
          </li>
          <li onClick={filter} className={classes.li}>
            Americas
          </li>
          <li onClick={filter} className={classes.li}>
            Asia
          </li>
          <li onClick={filter} className={classes.li}>
            Europe
          </li>
          <li onClick={filter} className={classes.li}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Continent;
