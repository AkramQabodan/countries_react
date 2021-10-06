import React from "react";
import classes from "./SearchResult.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Info from "./Info";
import BorderCountry from "./BorderCountry.js";
function SearchResult() {
  return (
    <div className={classes.container}>
      <button className={classes.button}>
        <AiOutlineArrowLeft />
        Back
      </button>

      <div className={classes.detailsContainer}>
        <img className={classes.img} alt="Flag img" />
        <div className={classes.details}>
          <span className={classes.countryName}>Egypt</span>
          <ul className={classes.detailsTable}>
            <Info firstInfo="Native Name" secondInfo="Egypt" />
            <Info firstInfo="Population" secondInfo="100,000,000" />
            <Info firstInfo="Region" secondInfo="Africa" />
            <Info firstInfo="Sub Region" secondInfo="Middle East" />
            <Info firstInfo="Capital" secondInfo="Cairo" />
            <Info firstInfo="Top Level Domain" secondInfo=".eg" />
            <Info firstInfo="Currencies" secondInfo="Pound" />
            <Info firstInfo="Languages" secondInfo="Arabic" />
          </ul>
          <div className={classes.borderContainer}>
            <span className={classes.borderTitle}>Border Countries:</span>
            <ul className={classes.borderCountries}>
              <BorderCountry Info="Lybia"></BorderCountry>
              <BorderCountry Info="Palastine"></BorderCountry>
              <BorderCountry Info="Sudan"></BorderCountry>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchResult;
