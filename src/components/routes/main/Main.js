import { React, useContext } from "react";
import Continent from "./Continent";
import Countries from "./Countries";
import SearchBar from "./SearchBar";
import classes from "./Main.module.css";
import { CountriesData } from "../../../CountriesData";
function Main() {
  const { theme } = useContext(CountriesData);
  const mainTheme = theme === "light" ? "mainLight" : "mainDark";
  return (
    <div className={`${classes[mainTheme]} ${classes.main}`}>
      <div className={`${classes.tools} `}>
        <SearchBar />
        <Continent />
      </div>
      <Countries />
    </div>
  );
}
export default Main;
