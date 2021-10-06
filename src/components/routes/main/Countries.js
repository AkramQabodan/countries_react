import { React, useContext } from "react";
import classes from "./Countries.module.css";
import { CountriesData } from "../../../CountriesData";
function Countries() {
  const data = useContext(CountriesData);
  return <div className={classes.countriesContainer}>{data.UI}</div>;
}
export default Countries;
