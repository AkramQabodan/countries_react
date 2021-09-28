import { React } from "react";
import classes from "./Countries.module.css";
import Country from "./Country";
function Countries() {
  return (
    <div className={classes.countriesContainer}>
      <Country />
    </div>
  );
}
export default Countries;
