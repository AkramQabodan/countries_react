import { React, useEffect, useState, useCallback } from "react";
import classes from "./SearchResult.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Info from "./Info";
import BorderCountry from "./BorderCountry.js";
import { Link } from "react-router-dom";
function SearchResult() {
  const [country, setCountry] = useState();
  // const [currencies, setCurrencies] = useState();
  // const [languages, setLanguages] = useState();
  // const [nativeLanguage, setNativeLanguage] = useState();
  // const [UI, setUI] = useState(false);
  const code = localStorage.getItem("code");
  const fetchData = async () => {
    console.log(code);
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    const data = await response.json();
    setCountry(data[0]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {country ? (
        <div className={classes.container}>
          <Link className={classes.link} to={"/"}>
            <button className={classes.button}>
              <AiOutlineArrowLeft />
              Back
            </button>
          </Link>
          <div className={classes.detailsContainer}>
            <img
              className={classes.img}
              alt="Flag img"
              src={country.flags.svg}
            />
            <div className={classes.details}>
              <span className={classes.countryName}>{country.name.common}</span>
              <ul className={classes.detailsTable}>
                <Info
                  firstInfo="Native Name"
                  secondInfo={
                    country.name.nativeName[
                      Object.keys(country.name.nativeName)[0]
                    ].common
                  }
                />
                <Info firstInfo="Population" secondInfo={country.population} />
                <Info firstInfo="Region" secondInfo={country.region} />
                <Info firstInfo="Sub Region" secondInfo={country.subregion} />
                <Info firstInfo="Capital" secondInfo={country.capital} />
                <Info
                  firstInfo="Top Level Domain"
                  secondInfo={country.tld[0]}
                />
                <Info
                  firstInfo="Currencies"
                  secondInfo={
                    country.currencies[Object.keys(country.currencies)[0]].name
                  }
                />
                <Info
                  firstInfo="Languages"
                  secondInfo={
                    country.languages[Object.keys(country.languages)[0]]
                  }
                />
              </ul>
              <div className={classes.borderContainer}>
                <span className={classes.borderTitle}>Border Countries:</span>
                <ul className={classes.borderCountries}>
                  <BorderCountry Info="Lybia"></BorderCountry>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default SearchResult;
