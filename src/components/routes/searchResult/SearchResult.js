import { React, useEffect, useState } from "react";
import classes from "./SearchResult.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Info from "./Info";
import BorderCountry from "./BorderCountry.js";
import { Link } from "react-router-dom";
function SearchResult() {
  const [country, setCountry] = useState();
  const code = localStorage.getItem("code");
  useEffect(() => {
    const url = `https://restcountries.com/v2/alpha/${code}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountry(json);
        console.log(country);
      } catch {}
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      {/* <Link className={classes.link} to={"/"}>
        <button className={classes.button}>
          <AiOutlineArrowLeft />
          Back
        </button>
      </Link>
      <div className={classes.detailsContainer}>
        <img className={classes.img} alt="Flag img" src={country.flag} />
        <div className={classes.details}>
          <span className={classes.countryName}>{country.name}</span>
          <ul className={classes.detailsTable}>
            <Info firstInfo="Native Name" secondInfo={country.nativeName} />
            <Info firstInfo="Population" secondInfo={country.population} />
            <Info firstInfo="Region" secondInfo={country.region} />
            <Info firstInfo="Sub Region" secondInfo={country.subregion} />
            <Info firstInfo="Capital" secondInfo={country.capital} />
            <Info
              firstInfo="Top Level Domain"
              secondInfo={country.topLevelDomain[0]}
            />
            <Info
              firstInfo="Currencies"
              secondInfo={country.currencies[0].name}
            />
            <Info
              firstInfo="Languages"
              secondInfo={country.languages[0].name}
            />
          </ul>
          <div className={classes.borderContainer}>
            <span className={classes.borderTitle}>Border Countries:</span>
            <ul className={classes.borderCountries}>
              <BorderCountry Info="Lybia"></BorderCountry>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default SearchResult;
