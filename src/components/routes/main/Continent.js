import { React, useContext, useState } from "react";
import classes from "./Continent.module.css";
import { CountriesData } from "../../../CountriesData";
function Continent() {
  const { filter, theme, showContinent, setShowContinent } =
    useContext(CountriesData);
  const buttonTheme = theme === "light" ? "buttonLight" : "buttonDark";
  const ulTheme = theme === "light" ? "ulLight" : "ulDark";
  const liTheme = theme === "light" ? "liLight" : "liDark";
  const continentsTheme =
    theme === "light" ? "continentsLight" : "continentsDark";
  const buttonHandler = () => {
    setShowContinent((prev) => !prev);
  };

  return (
    <div className={classes.dropdown}>
      <button
        onClick={buttonHandler}
        className={`${classes.button} ${classes[buttonTheme]}`}
      >
        Filter by Region
      </button>
      <div
        className={`${classes[continentsTheme]} ${classes.continents} ${
          showContinent ? classes.show : classes.hide
        }`}
      >
        <ul className={classes[ulTheme]}>
          <li onClick={filter} className={`${classes.li} ${classes[liTheme]}`}>
            Africa
          </li>
          <li onClick={filter} className={`${classes.li} ${classes[liTheme]}`}>
            Americas
          </li>
          <li onClick={filter} className={`${classes.li} ${classes[liTheme]}`}>
            Asia
          </li>
          <li onClick={filter} className={`${classes.li} ${classes[liTheme]}`}>
            Europe
          </li>
          <li onClick={filter} className={`${classes.li} ${classes[liTheme]}`}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Continent;
