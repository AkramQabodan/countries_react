import { React, useEffect, useState, useContext } from "react";
import classes from "./SearchResult.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CountriesData } from "../../../CountriesData";
import Info from "./Info";
import BorderCountry from "./BorderCountry.js";
import { Link } from "react-router-dom";
function SearchResult() {
  const [country, setCountry] = useState();
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
  }, [code]);

  const { theme } = useContext(CountriesData);
  const containerTheme = theme === "light" ? "containerLight" : "containerDark";
  const buttonTheme = theme === "light" ? "buttonLight" : "buttonDark";
  return (
    <>
      {country ? (
        <div className={`${classes[containerTheme]} ${classes.container}`}>
          <Link className={classes.link} to={"/"}>
            <button className={`${classes.button} ${classes[buttonTheme]} `}>
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
                  secondInfo={country.tld ? country.tld[0] : "none"}
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
                  {country.borders ? (
                    country.borders.map((country, index) => (
                      <BorderCountry Info={country} key={index} />
                    ))
                  ) : (
                    <p>There aren't border countries</p>
                  )}
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
